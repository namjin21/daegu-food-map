"use client";

import { useEffect } from "react";

function Map() {
  // TODO: Extract this logic out of this component
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    // TODO: Extract API key
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=8d49f2a69156aac94bfb0edbdfbb9206&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <div className="h-full">
      <div
        id="map"
        style={{ width: "100%", height: "100%", position: "fixed" }}
      ></div>
    </div>
  );
}

export default Map;
