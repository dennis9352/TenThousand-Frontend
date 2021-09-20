import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user"

export const history = createBrowserHistory()

const rootReducer = combineReducers({
    user: User,
    router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history: history})];

const env = process.env.NODE_ENV;

if (env === "development"){
    const { logger } = require("redux-logger");
    middlewares.push(logger);
};

const composeEnhancers =
    typeof window === "object" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
        ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            })
        : compose;


const enhancer = applyMiddleware(...middlewares)



let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();