import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RootStore from "../mobx/RootStore";
import {Provider} from "mobx-react";

function MyApp({Component, pageProps}) {

    const store = new RootStore()

    return (
        <Provider {...store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
