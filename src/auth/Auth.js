import React from "react";
import {Redirect, Route} from "react-router-dom";
import AuthService from '../services/auth.service';


// function AuthButton() {
//     let history = useHistory();
//     let auth = useAuth();

//     return auth.user ? (
//         <p>
//             Welcome!{" "}
//             <button
//                 onClick={() => {
//                     auth.signout(() => history.push("/"));
//                 }}
//             >
//                 Sign out
//       </button>
//         </p>
//     ) : (
//             <p>You are not logged in.</p>
//         );
// }

function PrivateRoute({ children, ...rest }) {
    let user = AuthService.getCurrentUser();
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                } else {
                    return <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                }
            }}
        />
    );
}

const AuthContext = React.createContext({
    user: null,
    setUser: () => { }
});


// function LoginPage() {
//     let history = useHistory();
//     let location = useLocation();
//     let auth = useAuth();

//     let { from } = location.state || { from: { pathname: "/" } };
//             history.replace(from);

//     let login = () => {
//         auth.signin(() => {
//         });
//     };

//     return (
//         <div>
//             <p>You must log in to view the page at {from.pathname}</p>
//             <button onClick={login}>Log in</button>
//         </div>
//     );
// }

export { PrivateRoute, AuthContext };
