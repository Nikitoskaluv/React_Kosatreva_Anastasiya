// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export default function PublicRoute({ authenticated, ...rest }) {
//     return !authenticated ? <Route {...rest} /> : <Redirect to="/chats" />;
// }

// import React from "react";

import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ auth, ...rest }) {
    return !auth ? (
        <Route {...rest} />
    ) : (
        <Redirect
            to={{
                pathname: "/profile"
            }}
        />
    );
}