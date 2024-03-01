import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom' // npm install react-router-dom@5
//sample
import AddSampleComponent from "../sample/AddSampleComponent";
import ListSampleComponent from "../sample/ListSampleComponent";
import EditSampleComponent from "../sample/EditSampleComponent";

//main
import MainBody from '../main/MainBody';

//page_1
import Page1 from '../page_1/Page1';
import Page2 from '../page_2/Page2';
import Page3 from '../page_3/Page3';

const AppRouter = () => {

    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Route path="/" exact={true} component={MainBody} />
                    <Route path="/page_1" exact={true} component={Page1} />
                    <Route path="/page_2" exact={true} component={Page2} />
                    <Route path="/page3" exact={true} component={Page3} />

                    <Route path="/add-sample" exact={true} component={AddSampleComponent} />
                    <Route path="/samples" exact={true} component={ListSampleComponent} />
                    <Route path="/edit-sample" exact={true} component={EditSampleComponent} />
                </div>
            </BrowserRouter>
        </div>
    )
}

const style = {
}

export default AppRouter