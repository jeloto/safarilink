import React from 'react'
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
function Widgets() {
    return (
        <div className="widgets">
            
            <div className="widgets__header">
            <h2>Main Partner</h2>
            <h2 className="headers">Opodo</h2>
            <iframe
            className="iframes"
            src="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjGufeU7MbxAhWPre0KHUUYCiwYABABGgJkZw&ae=2&ohost=www.google.com&cid=CAESQOD2oXedZQxRhtJMrnOVspCukYKRTm1_FyqnL8i9B4veEhTqI_BPKelFKIaO7XSi-QmpUojXgu-uCftyDliVUhg&sig=AOD64_3eb1a2sn9xb2txLQtC86bacb83YQ&q&adurl&ved=2ahUKEwjF7u-U7MbxAhU0lFwKHdMCAdYQ0Qx6BAgDEAE"
            width="340"
            height="100%"
            style={{border:"none",overflow:
            "hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
            <h2 className="headers">Uganda Airlines</h2>
            <iframe
             className="iframes"
            src="https://www.ugandairlines.com/"
            width="340"
            height="100%"
            style={{border:"none",overflow:
            "hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
             <h2 className="headers">Kenya Airways</h2>
            <iframe
             className="iframes"
            src="https://www.edreams.com/offers/flights/airline/KQ/kenya-airways/?mktportal=google&utm_id=go_cmp-9881273411_adg-110860971323_ad-472464494105_kwd-48194690_dev-c_ext-_locphy-9076838_mtype-e_ntw-g&gclid=CjwKCAjwlYCHBhAQEiwA4K21m-5_BVsQN0xw7DI3VuPT8DLfyCk9AUh7L1a5-YLCwtKk2v6kk0WnyxoCczIQAvD_BwE"
            width="340"
            height="100%"
            style={{border:"none",overflow:
            "hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
            <h2 className="headers">Airbook One</h2>
            <iframe
             className="iframes"
            src="  https://airbookone.com/"
            width="340"
            height="100%"
            style={{border:"none",overflow:
            "hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
            </div>
        </div>
      
    )
}

export default Widgets
