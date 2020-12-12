import React from 'react';
import {Link} from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
    return (

        // <div className="box-absolute">

        //     <div className="center-block">
        //         <h1>404</h1>
        //         <h4>Hình như bạn đi lộn chỗ, trang này không tồn tại!</h4>
        //     </div>
        // </div>
        <div className="mainbox">
            <div className="smallbox">
                <div className="err">404</div>
                <div className="msg">Hình như bạn đi lộn chỗ, trang này không tồn tại!<p>Hãy thử quay lại <Link to="/">trang chủ</Link> và thử lại.</p></div>
            </div>
        </div>
    )
}

export default Page404;
