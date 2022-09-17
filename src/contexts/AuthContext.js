import { createContext, useReducer } from "react";

const initialValue = {
  isAuthenticated: false,
  user: null,
};

const LOGIN_SUCCESS = "LOGIN_SUCCSESS";
const LOGOUT = "LOGOUT";

const authority = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload.user };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};
const AuthContext = createContext({ ...initialValue });
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authority, initialValue);
  const login = async (username) => {
    dispatch({ type: LOGIN_SUCCESS, payload: { user: { username } } });
  };
  const logout = async () => {
    dispatch({ type: LOGOUT });
  };
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
