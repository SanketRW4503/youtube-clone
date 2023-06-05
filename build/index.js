var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$react = require("react");
var $9WItx$reactdomclient = require("react-dom/client");
var $9WItx$reactredux = require("react-redux");
var $9WItx$reactrouterdom = require("react-router-dom");
var $9WItx$reduxjstoolkit = require("@reduxjs/toolkit");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}




var $cf71da268eb79058$exports = {};
$cf71da268eb79058$exports = new URL("hamburger.3d8597ee.png", "file:" + __filename).toString();


var $2a010039dd29363a$exports = {};
$2a010039dd29363a$exports = new URL("youtube-logo.d9fb6ed8.png", "file:" + __filename).toString();


var $9267e361d77f811e$exports = {};
$9267e361d77f811e$exports = new URL("userimage.3bbf4ecb.png", "file:" + __filename).toString();




const $c704d26be8a539cd$export$7a3bdf7180628a3c = (0, $9WItx$reduxjstoolkit.createSlice)({
    name: "app",
    initialState: {
        toggle: true
    },
    reducers: {
        hamburgerToggle: (state)=>{
            state.toggle = !state.toggle;
        }
    }
});
var $c704d26be8a539cd$export$2e2bcd8739ae039 = $c704d26be8a539cd$export$7a3bdf7180628a3c.reducer;
const { hamburgerToggle: $c704d26be8a539cd$export$bfd84dc09930a88b  } = $c704d26be8a539cd$export$7a3bdf7180628a3c.actions;



const $1c560690f224e6de$export$49f545d126004f9a = "&key=AIzaSyADssco1k5JHSBngHj9vm1MetiaoF0mUmU";
const $1c560690f224e6de$export$2494a9d05946b35c = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN" + $1c560690f224e6de$export$49f545d126004f9a;
const $1c560690f224e6de$export$604dfa5a6a050945 = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
const $1c560690f224e6de$export$e4ec35099fd1a124 = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
const $1c560690f224e6de$export$852085bf16306e3a = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
const $1c560690f224e6de$export$8d6561a37982bb9b = "https://www.googleapis.com/youtube/v3/commentThreads?&part=snippet&maxResults=100&videoId=";
const $1c560690f224e6de$export$719cde08afa5283b = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&type=video&relatedToVideoId=";





const $5dcded0093e25488$var$searchSlice = (0, $9WItx$reduxjstoolkit.createSlice)({
    name: "search",
    initialState: {},
    reducers: {
        casheResult: (state, action)=>{
            state = Object.assign(state, action.payload);
        }
    }
});
const { casheResult: $5dcded0093e25488$export$c899c066a92f1f7b  } = $5dcded0093e25488$var$searchSlice.actions;
var $5dcded0093e25488$export$2e2bcd8739ae039 = $5dcded0093e25488$var$searchSlice.reducer;



const $b4f7f373b1ed1613$var$darkmodeSlice = (0, $9WItx$reduxjstoolkit.createSlice)({
    name: "mode",
    initialState: {
        property: {
            color: "black",
            backgroundColor: "white"
        },
        property2: {
            color: "black",
            backgroundColor: "#F1F5F9"
        },
        property3forimage: {
            filter: "invert(0%)"
        }
    },
    reducers: {
        darkMode: (state)=>{
            if (state.property.color === "black") {
                state.property = {
                    color: "white",
                    backgroundColor: "black"
                };
                state.property2 = {
                    color: "white",
                    backgroundColor: "#606060"
                };
                state.property3forimage = {
                    filter: "invert(100%)"
                };
            } else {
                state.property = {
                    color: "black",
                    backgroundColor: "white"
                };
                state.property2 = {
                    color: "black",
                    backgroundColor: "#F1F5F9"
                };
                state.property3forimage = {
                    filter: "invert(0%)"
                };
            }
        }
    }
});
var $b4f7f373b1ed1613$export$2e2bcd8739ae039 = $b4f7f373b1ed1613$var$darkmodeSlice.reducer;
const { darkMode: $b4f7f373b1ed1613$export$808aaf1b460dc9af  } = $b4f7f373b1ed1613$var$darkmodeSlice.actions;


const $99d4edb84bf9b207$var$store = (0, $9WItx$reduxjstoolkit.configureStore)({
    reducer: {
        app: (0, $c704d26be8a539cd$export$2e2bcd8739ae039),
        search: (0, $5dcded0093e25488$export$2e2bcd8739ae039),
        mode: (0, $b4f7f373b1ed1613$export$2e2bcd8739ae039)
    }
});
var $99d4edb84bf9b207$export$2e2bcd8739ae039 = $99d4edb84bf9b207$var$store;





Header = ()=>{
    const [searchtext, setSearchText] = (0, $9WItx$react.useState)([]);
    const [suggestions, setSuggestion] = (0, $9WItx$react.useState)([]);
    const dispatch = (0, $9WItx$reactredux.useDispatch)();
    const searchCashe = (0, $9WItx$reactredux.useSelector)((store)=>store.search);
    const property1 = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property);
    const property2 = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property2);
    function setupToggle() {
        dispatch((0, $c704d26be8a539cd$export$bfd84dc09930a88b)());
    }
    (0, $9WItx$react.useEffect)(()=>{
        const myTimeout = setTimeout(()=>{
            if (searchCashe[searchtext]) setSuggestion(searchCashe[searchtext]);
            else getSuggestions();
        }, 200);
        return ()=>{
            clearTimeout(myTimeout);
        };
    }, [
        searchtext
    ]);
    async function getSuggestions() {
        const res = await fetch((0, $1c560690f224e6de$export$852085bf16306e3a) + searchtext);
        const json = await res.json();
        setSuggestion(json[1]);
        dispatch((0, $5dcded0093e25488$export$c899c066a92f1f7b)({
            [searchtext]: json[1]
        }));
        console.log(suggestions);
    }
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("nav", {
        className: "flex justify-between items-center px-[20px] pb-[14] pt-[10px] fixed  top-0 right-0 left-0  bg-white",
        style: property1,
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "flex items-center cursor-pointer justify-between",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                        className: "hover:bg-slate-400 ml-2",
                        onClick: ()=>setupToggle(),
                        width: 100,
                        children: "☰"
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("a", {
                        href: "/",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                width: 120,
                                height: 100,
                                src: (0, (/*@__PURE__*/$parcel$interopDefault($2a010039dd29363a$exports))),
                                className: "ml-[20px]"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: " flex overflow-visible",
                style: property1,
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "flex relative",
                        style: property1,
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                                style: property1,
                                className: "border rounded-l-[20px]  p-[5px] px-[20px] py-[7px] w-[500px] focus:outline-[#9aa7cc] focus:shadow-inner    outline-[1px] z-0   ",
                                placeholder: "Search",
                                type: "text",
                                value: searchtext,
                                onChange: (e)=>setSearchText(e.target.value)
                            }),
                            searchtext.length > 0 ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                onClick: ()=>setSearchText(""),
                                className: "text-[24px]   right-[10px] cursor-pointer absolute z-10",
                                children: "\xd7"
                            }) : null,
                            suggestions.length > 1 ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "bg-white z-10 w-[500px] fixed py-[15px] rounded-lg shadow-md mt-[56px]  ",
                                style: property1,
                                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("ul", {
                                    children: suggestions.map((e, index)=>{
                                        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
                                            to: "/search/" + e,
                                            children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("li", {
                                                onClick: ()=>setSearchText(""),
                                                className: "py-[10px] px-4 hover:bg-slate-200 ",
                                                children: [
                                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                                        className: "mr-[5px]",
                                                        children: "\uD83D\uDD0D "
                                                    }),
                                                    "   ",
                                                    e
                                                ]
                                            }, index)
                                        });
                                    })
                                })
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactrouterdom.Link), {
                        to: "/search/" + searchtext,
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                onClick: ()=>setSearchText(""),
                                className: "bg-[#eeeeee] border rounded-r-[20px] p-[3px]  text-black px-[15px] text-[22px] ",
                                style: property1,
                                children: "\uD83D\uDD0D"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    width: 30,
                    src: (0, (/*@__PURE__*/$parcel$interopDefault($9267e361d77f811e$exports)))
                })
            })
        ]
    });
};
var $23f2aa1532eda93b$export$2e2bcd8739ae039 = Header;






var $2a45aa6269b11ffd$exports = {};
$2a45aa6269b11ffd$exports = new URL("shortslogo.83e3ec47.png", "file:" + __filename).toString();


var $33bdffb5e1a9dd08$exports = {};
$33bdffb5e1a9dd08$exports = new URL("trending.034144ac.png", "file:" + __filename).toString();


var $d3703a7a5b442d7c$exports = {};
$d3703a7a5b442d7c$exports = new URL("settings.05299fcf.png", "file:" + __filename).toString();


var $f543552436c90476$exports = {};
$f543552436c90476$exports = new URL("homeicon.59799ec1.png", "file:" + __filename).toString();


var $3a1eeeaa09a3461a$exports = {};
$3a1eeeaa09a3461a$exports = new URL("darkmodeicon.6d951f69.png", "file:" + __filename).toString();




SlideBar = ()=>{
    const toggleStatus = (0, $9WItx$reactredux.useSelector)((store)=>store.app.toggle);
    const property1 = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property);
    const property3 = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property3forimage);
    const dispatch = (0, $9WItx$reactredux.useDispatch)((0, $b4f7f373b1ed1613$export$808aaf1b460dc9af)());
    const [cssStyle, setCSSStyle] = (0, $9WItx$react.useState)();
    function setDarkMode() {
        dispatch((0, $b4f7f373b1ed1613$export$808aaf1b460dc9af)("on"));
    }
    (0, $9WItx$react.useEffect)(()=>{
        if (toggleStatus !== true) setCSSStyle({
            display: "none"
        });
        else setCSSStyle({
            position: "fixed",
            left: "0",
            top: "60px",
            height: "100%",
            width: "15%",
            bottom: "1px",
            backgroundColor: property1.backgroundColor
        });
    }, [
        toggleStatus,
        property1
    ]);
    return(// fixed h-[100%] top-[60px] left-0  w-[15%]
    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
            style: cssStyle,
            children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("ul", {
                className: " p-[10px] flex flex-col ",
                style: property1,
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
                        to: "/",
                        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("li", {
                            className: "px-[10px] w-[200px] py-[10px] cursor-pointer hover:bg-slate-100 rounded-[5px] flex  ",
                            style: property1,
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($f543552436c90476$exports))),
                                    className: "w-[20px] mr-4 ",
                                    style: property3
                                }),
                                "Home"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
                        to: "/shorts",
                        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("li", {
                            className: "px-[10px] w-[200px] py-[10px] cursor-pointer hover:bg-slate-100 rounded-[5px] flex  ",
                            style: property1,
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($2a45aa6269b11ffd$exports))),
                                    className: "w-[20px] mr-4 ",
                                    style: property3
                                }),
                                "Shorts"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("li", {
                        className: "px-[10px] w-[200px] py-[10px] cursor-pointer hover:bg-slate-100 rounded-[5px] flex ",
                        style: property1,
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                src: (0, (/*@__PURE__*/$parcel$interopDefault($33bdffb5e1a9dd08$exports))),
                                className: "w-[20px]  mr-4 ",
                                style: property3
                            }),
                            "Trending"
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("li", {
                        className: "px-[10px] w-[200px] py-[10px]  cursor-pointer hover:bg-slate-100 rounded-[5px] flex ",
                        style: property1,
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                src: (0, (/*@__PURE__*/$parcel$interopDefault($f543552436c90476$exports))),
                                className: "w-[20px] mr-4 ",
                                style: property3
                            }),
                            "Shopping"
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("li", {
                        className: "px-[10px] w-[200px] py-[10px]  cursor-pointer hover:bg-slate-100 rounded-[5px] flex  ",
                        style: property1,
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                src: (0, (/*@__PURE__*/$parcel$interopDefault($d3703a7a5b442d7c$exports))),
                                className: "w-[20px]  mr-4",
                                style: property3
                            }),
                            "Settings"
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("li", {
                        onClick: ()=>{
                            setDarkMode();
                        },
                        className: "px-[10px] w-[200px] py-[10px]  cursor-pointer  rounded-[5px] flex  ",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                src: (0, (/*@__PURE__*/$parcel$interopDefault($3a1eeeaa09a3461a$exports))),
                                className: "w-[20px]  mr-4",
                                style: property3
                            }),
                            "Dark mode"
                        ]
                    })
                ]
            })
        })
    }));
};
var $f461d0ec77779c02$export$2e2bcd8739ae039 = SlideBar;








const $8fc2a26ec668dd68$export$98e782fe3477bdb6 = (number)=>{
    let count = "";
    if (number > 100000) {
        if (number.length == 8) count = number[0] + number[1] + "M";
        else if (number.length == 7 && number[1] == 0) count = number[0] + "M";
        else count = number[0] + "." + number[1] + "M";
        return count;
    }
    if (number < 10000) {
        count = number + "K";
        return count;
    }
    if (number > 1000) {
        count = number;
        return count;
    } else if (number > 1000000000) {
        count = number + "B";
        return count;
    } else return number;
};
const $8fc2a26ec668dd68$export$7b4705c979f5d561 = (s)=>{
    let startATag = s.indexOf("href");
    let endAtag = s.indexOf("</a>");
    if (startATag !== -1) {
        let stringss = s.slice(0, startATag - 1);
        stringss += ` style='color:blue; '`;
        stringss += s.slice(startATag - 1, 2000);
        return stringss;
    } else return s;
};
const $8fc2a26ec668dd68$export$2d919ab09ad7f058 = (time)=>{
    date = new Date(time);
    cuurentDate = new Date();
    var total_seconds = Math.abs(date - cuurentDate) / 1000; //calculate days difference by dividing total seconds in a day 
    var days_difference = Math.floor(total_seconds / 86400);
    if (days_difference == 0) {
        const time = date.getHours();
        const ctime = cuurentDate.getHours();
        const result = 24 - time + ctime;
        if (ctime < time) {
            if (result == 0) return date.getMinutes() + "Minutes Ago";
            else return result + "hours ago";
        } else {
            if (result == 0) return date.getMinutes() + "Minutes Ago";
            else return ctime - time + "hours ago";
        }
    } else if (days_difference < 30 && days_difference > 7) {
        console.log("d" + days_difference);
        let result = days_difference / 7;
        result = result.toString().slice(0, 1);
        return result + "weeks ago";
    } else if (days_difference > 365) {
        let result = days_difference / 365;
        result = result.toString().slice(0, 1);
        return result + "years ago";
    } else if (days_difference < 365 && days_difference > 30) {
        let result = days_difference / 30;
        result = result.toString().slice(0, 1);
        return result + "Months ago";
    } else return days_difference + "day ago";
};


var $6dd145ee434ac847$exports = {};
$6dd145ee434ac847$exports = new URL("!image-available.95faf39d.jpg", "file:" + __filename).toString();



function $18d7430061032659$export$2e2bcd8739ae039(props) {
    const [viewcount, setViewCount] = (0, $9WItx$react.useState)("");
    const [uploadtime, setUploadTime] = (0, $9WItx$react.useState)("");
    (0, $9WItx$react.useEffect)(()=>{
        let d = (0, $8fc2a26ec668dd68$export$98e782fe3477bdb6)(props.videoInfo?.statistics?.viewCount);
        let u = (0, $8fc2a26ec668dd68$export$2d919ab09ad7f058)(props.videoInfo?.snippet?.publishedAt);
        setUploadTime(u);
        setViewCount(d);
    }, []);
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
        to: "/watchvideo/" + props.videoInfo.id,
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "m-[10px] px-[5px] w-[296px]  cursor-pointer",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    alt: "thumbail",
                    id: "t",
                    className: "rounded-xl",
                    src: props.videoInfo?.snippet?.thumbnails?.medium?.url ? props.videoInfo?.snippet?.thumbnails?.medium?.url : (0, (/*@__PURE__*/$parcel$interopDefault($6dd145ee434ac847$exports)))
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                            children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                width: 35
                            })
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h3", {
                                    className: "font-bold inline-block ",
                                    children: props.videoInfo?.snippet?.title.slice(0, 60)
                                }),
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                    className: "text-gray-600 ",
                                    children: [
                                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("small", {
                                            children: props.videoInfo?.snippet?.channelTitle
                                        }),
                                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("ul", {
                                            className: "flex pr-[10px] text-[12px] ",
                                            children: [
                                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                                    children: viewcount
                                                }),
                                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                                    className: "marker:text-gray-700 list-disc ml-[25px]",
                                                    children: uploadtime
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}




function $1ed2dfed0167440e$export$2e2bcd8739ae039() {
    const [video, setVideo] = (0, $9WItx$react.useState)();
    const [precssbtnID, setPreCssBtnID] = (0, $9WItx$react.useState)();
    const [cssStyle, setCSSStyle] = (0, $9WItx$react.useState)();
    const toggleStatus = (0, $9WItx$reactredux.useSelector)((store)=>store.app.toggle);
    const property1 = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property);
    const property2 = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property2);
    const [scrollcss, setScrollcss] = (0, $9WItx$react.useState)();
    const category = [
        "all",
        "game",
        "music",
        "mixes",
        "live",
        "gaming",
        "wickets",
        "lofi",
        "Bollywood",
        "react",
        "java",
        "instagram",
        "engineering",
        "gaming",
        "wickets",
        "lofi",
        "Bollywood",
        "react"
    ];
    (0, $9WItx$react.useEffect)(()=>{
        getVideo();
    }, []);
    async function getVideo() {
        const res = await fetch((0, $1c560690f224e6de$export$2494a9d05946b35c));
        const json = await res.json();
        setVideo(json);
        console.log(json);
    }
    function scrollthecategoryBACKWORD() {
        setScrollcss({
            translate: "0px"
        });
        const backwordbtn = document.getElementById("backword-btn");
        backwordbtn.style.display = "none";
        const forwordbtn = document.getElementById("forword-btn");
        forwordbtn.style.display = "block";
    }
    async function setThisCategory(category, id) {
        if (precssbtnID !== undefined) {
            const pre = document.getElementById(precssbtnID);
            pre.style.backgroundColor = "rgb(241 245 249 / var(--tw-bg-opacity))";
            pre.style.color = "black";
        }
        const current = document.getElementById(id);
        current.style.backgroundColor = "black";
        current.style.color = "white";
        setPreCssBtnID(id);
        if (category == "all") getVideo();
        else {
            const res = await fetch((0, $1c560690f224e6de$export$604dfa5a6a050945) + category + (0, $1c560690f224e6de$export$49f545d126004f9a));
            const json = await res.json();
            console.log(json);
            setVideo(json);
        }
    }
    function scrollthecategoryForword() {
        setScrollcss({
            translate: "-600px"
        });
        const forwordbtn = document.getElementById("forword-btn");
        forwordbtn.style.display = "none";
        const backwordbtn = document.getElementById("backword-btn");
        backwordbtn.style.display = "block";
    }
    (0, $9WItx$react.useEffect)(()=>{
        if (toggleStatus == true) setCSSStyle({
            marginLeft: "15%"
        });
        else setCSSStyle({
            marginLeft: "0%"
        });
    }, [
        toggleStatus
    ]);
    if (!video) return null;
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "overflow-x-hidden mt-[65px]  transition-[margin-left]  duration-4000  z-3 ",
        style: cssStyle,
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "flex  h-[50px]  justify-between items-center",
                style: property1,
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        className: "rounded-[50%] w-[50px] p-[10px] z-4 leading-5 hidden text-xl text-slate-00",
                        id: "backword-btn",
                        style: property2,
                        onClick: ()=>scrollthecategoryBACKWORD(),
                        children: " ❮"
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                        className: "flex overflow-hidden flex-nowrap",
                        children: category.map((c, index)=>{
                            return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                className: "bg-slate-100 rounded-xl px-[20px] h-10 py-1 mx-1  transition-transition duration-1000",
                                style: {
                                    ...scrollcss,
                                    ...property2
                                },
                                onClick: ()=>setThisCategory(c, "cat-btn" + index),
                                id: "cat-btn" + index,
                                children: c
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        className: "rounded-[50%] w-[50px] p-[10px] leading-5  text-xl text-slate-400",
                        style: property2,
                        id: "forword-btn",
                        onClick: ()=>scrollthecategoryForword(),
                        children: " ❭"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "flex flex-wrap justify-center items-center",
                style: property1,
                children: video.items.map((v)=>{
                    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $18d7430061032659$export$2e2bcd8739ae039), {
                        videoInfo: v
                    });
                })
            })
        ]
    });
}













var $ed0f9536d2861643$exports = {};
$ed0f9536d2861643$exports = new URL("verified_badge.c9b094f1.png", "file:" + __filename).toString();





var $3062d535e614014f$exports = {};
$3062d535e614014f$exports = new URL("like.02526b5f.png", "file:" + __filename).toString();


function $93ac0056ce1bf172$export$2e2bcd8739ae039(props) {
    function filtercomment() {
        let d = document.getElementById("d" + props?.commentInfo?.publishedAt);
        d.innerHTML += (0, $8fc2a26ec668dd68$export$7b4705c979f5d561)(props?.commentInfo?.textDisplay);
    }
    (0, $9WItx$react.useEffect)(()=>{
        filtercomment();
    }, []);
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "flex p-3 ",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                className: "rounded-[50%] w-8 h-[38] mr-4",
                src: props.commentInfo.authorProfileImageUrl
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h1", {
                                className: "font-bold",
                                children: [
                                    props?.commentInfo?.authorDisplayName,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                                className: "text-[12px] text-slate-700 ml-1",
                                children: (0, $8fc2a26ec668dd68$export$2d919ab09ad7f058)(props?.commentInfo?.updatedAt)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                        id: "d" + props.commentInfo.publishedAt,
                        className: "whitespace-pre-wrap"
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("p", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($3062d535e614014f$exports))),
                                    className: "w-4"
                                }),
                                props.commentInfo.likeCount > 0 ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                    className: "text-[15px] ml-1",
                                    children: props.commentInfo.likeCount
                                }) : null,
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($3062d535e614014f$exports))),
                                    className: "w-4 rotate-[-180deg] ml-6"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}






function $ce32744bef0398dc$export$2e2bcd8739ae039(props) {
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
        to: "/watchvideo/" + props?.video?.id?.videoId,
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "m-4 flex  cursor-pointer",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    src: props?.video?.snippet?.thumbnails?.medium?.url,
                    width: 200,
                    className: "rounded-[10px]"
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    className: "ml-4",
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                            className: "font-bold text-[14px]",
                            children: props?.video?.snippet?.title.toString().slice(0, 70)
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("ul", {
                            className: "flex pr-[10px] text-[12px] ",
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                    className: "text-gray-600 ",
                                    children: props.video.snippet.channelTitle
                                }),
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                    className: "marker:text-gray-700  text-gray-600 list-disc ml-[25px]",
                                    children: (0, $8fc2a26ec668dd68$export$2d919ab09ad7f058)(props.video.snippet?.publishTime)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}




function $d60a12dbb98e7740$export$2e2bcd8739ae039() {
    const [videoInfo, setVideoInfo] = (0, $9WItx$react.useState)();
    const [cssStyle, setCSSStyle] = (0, $9WItx$react.useState)();
    const [showmore, setShowmore] = (0, $9WItx$react.useState)(200);
    const [comments, setComments] = (0, $9WItx$react.useState)();
    const [relatedvideo, setRelatedVideo] = (0, $9WItx$react.useState)();
    const params = (0, $9WItx$reactrouterdom.useParams)();
    const toggleStatus = (0, $9WItx$reactredux.useSelector)((store)=>store.app.toggle);
    const property1 = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property);
    const property2 = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property2);
    const dispatch = (0, $9WItx$reactredux.useDispatch)();
    (0, $9WItx$react.useEffect)(()=>{
        getVideoInfo();
        getComments();
    }, []);
    async function getComments() {
        const res = await fetch((0, $1c560690f224e6de$export$8d6561a37982bb9b) + params.id + (0, $1c560690f224e6de$export$49f545d126004f9a));
        const json = await res.json();
        console.log(json);
        setComments(json);
    }
    async function getVideoInfo() {
        const res = await fetch((0, $1c560690f224e6de$export$e4ec35099fd1a124) + params.id + (0, $1c560690f224e6de$export$49f545d126004f9a));
        const json = await res.json();
        console.log(json.items[0]);
        setVideoInfo(json.items[0]);
    }
    async function getRelatedVideos() {
        const res = await fetch((0, $1c560690f224e6de$export$719cde08afa5283b) + params.id + (0, $1c560690f224e6de$export$49f545d126004f9a));
        const json = await res.json();
        console.log(json);
        setRelatedVideo(json);
        console.log(relatedvideo);
    }
    (0, $9WItx$react.useEffect)(()=>{
        if (toggleStatus == true) dispatch((0, $c704d26be8a539cd$export$bfd84dc09930a88b)());
    }, []);
    (0, $9WItx$react.useEffect)(()=>{
        getRelatedVideos();
    }, []);
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "flex",
        style: property1,
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "px-[80px]  w-[66%] mt-[80px]",
                style: cssStyle,
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("iframe", {
                        width: "950",
                        height: "550",
                        src: "https://www.youtube.com/embed/" + params.id,
                        title: "YouTube video player",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;    picture-in-picture; web-share",
                        allowFullScreen: true
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "pt-[30px] w-[950px]",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                                className: "font-bold text-xl",
                                children: videoInfo?.snippet?.title
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                className: "flex justify-between items-center ",
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                        className: "flex p-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                                src: (0, (/*@__PURE__*/$parcel$interopDefault($9267e361d77f811e$exports))),
                                                width: "35px",
                                                className: "mr-[10px]"
                                            }),
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("li", {
                                                        className: "font-bold text-[15px] flex items-center",
                                                        children: [
                                                            videoInfo?.snippet?.channelTitle,
                                                            videoInfo?.contentDetails?.licensedContent == true ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                                                className: "ml-1",
                                                                src: (0, (/*@__PURE__*/$parcel$interopDefault($ed0f9536d2861643$exports))),
                                                                width: "12px",
                                                                height: "16px"
                                                            }) : null
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                                        className: "text-[10px] text-slate-600",
                                                        children: "10k Subscribers"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                                className: "bg-black text-white font-bold rounded-[20px] px-[15px] ml-[25px] text-[15px]",
                                                children: "View Channel"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                        className: "flex justify-between",
                                        style: cssStyle,
                                        children: [
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("p", {
                                                className: "bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2",
                                                style: {
                                                    ...cssStyle,
                                                    ...property2
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($3062d535e614014f$exports))),
                                                        className: "w-4"
                                                    }),
                                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                                                        className: "mx-[10px]",
                                                        children: (0, $8fc2a26ec668dd68$export$98e782fe3477bdb6)(videoInfo?.statistics?.likeCount)
                                                    }),
                                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($3062d535e614014f$exports))),
                                                        className: " rotate-[-180deg] w-4 "
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                                className: "bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2",
                                                style: property2,
                                                children: "Share"
                                            }),
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                                className: "bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2",
                                                style: property2,
                                                children: "Download"
                                            }),
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                                className: "bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2",
                                                style: property2,
                                                children: "✄Clip"
                                            }),
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                                className: "bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2",
                                                style: property2,
                                                children: "..."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "bg-slate-100 p-3 rounded-lg text-[12px] font-normal w-[950] mb-10 ",
                        style: property2,
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("p", {
                                className: "font-bold",
                                children: [
                                    (0, $8fc2a26ec668dd68$export$98e782fe3477bdb6)(videoInfo?.statistics?.viewCount),
                                    " Views  ",
                                    (0, $8fc2a26ec668dd68$export$2d919ab09ad7f058)(videoInfo?.snippet?.publishedAt)
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("pre", {
                                className: "whitespace-pre-wrap",
                                children: videoInfo?.snippet?.description.toString().slice(0, showmore)
                            }),
                            showmore == 200 ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                                className: "font-bold cursor-pointer",
                                onClick: ()=>{
                                    setShowmore(2000);
                                },
                                children: "Show More..."
                            }) : /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                                className: "font-bold cursor-pointer",
                                onClick: ()=>{
                                    setShowmore(200);
                                },
                                children: "Show Less..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h1", {
                                children: [
                                    videoInfo?.statistics?.commentCount,
                                    " Comments"
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                children: comments?.items.map((c, index)=>{
                                    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $93ac0056ce1bf172$export$2e2bcd8739ae039), {
                                        commentInfo: c?.snippet?.topLevelComment.snippet
                                    }, index);
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "mt-[60px]",
                children: relatedvideo?.items.length > 0 ? relatedvideo?.items.map((r)=>{
                    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $ce32744bef0398dc$export$2e2bcd8739ae039), {
                        video: r
                    });
                }) : null
            })
        ]
    });
}








function $443c27a9bd005e6e$export$2e2bcd8739ae039() {
    const [searchresult, setSearchResult] = (0, $9WItx$react.useState)([]);
    const params = (0, $9WItx$reactrouterdom.useParams)();
    console.log(params);
    const dm = (0, $9WItx$reactredux.useSelector)((store)=>store.mode.property);
    (0, $9WItx$react.useEffect)(()=>{
        getSearchedData();
    }, [
        params.query
    ]);
    async function getSearchedData() {
        const res = await fetch((0, $1c560690f224e6de$export$604dfa5a6a050945) + params.query + (0, $1c560690f224e6de$export$49f545d126004f9a));
        const json = await res.json();
        setSearchResult(json);
        console.log(json);
    }
    return searchresult?.items !== undefined ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        className: "overflow-x-hidden mt-[65px] ml-[15%]",
        style: dm,
        children: searchresult.items.map((i)=>{
            return i.id.channelId ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    className: "flex justify-between items-center m-[10px] p-[10px]",
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                    width: 150,
                                    src: i.snippet.thumbnails.medium.url,
                                    className: "rounded-[50%]"
                                }),
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                    className: "ml-[100px]",
                                    children: [
                                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                                            className: "font-bold",
                                            children: i.snippet.channelTitle
                                        }),
                                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                            children: i.snippet.description
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                            className: "px-[10px] py-[6px] bg-slate-100 rounded-xl",
                            children: "Visit Channel"
                        })
                    ]
                }, i.id.channelId)
            }) : /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
                to: "/watchvideo/" + i.id.videoId,
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    className: "flex m-[10px] p-[10px] cursor-pointer ",
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                            src: i.snippet.thumbnails.medium.url,
                            width: 450,
                            className: "rounded-[10px]"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                            className: "px-[10px] flex flex-col flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                                    className: "font-semibold",
                                    children: i.snippet.title
                                }),
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("ul", {
                                    className: "flex pr-[10px] text-[12px] ",
                                    children: [
                                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                            className: "text-gray-600 ",
                                            children: i.snippet.channelTitle
                                        }),
                                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                            className: "marker:text-gray-700  text-gray-600 list-disc ml-[25px]",
                                            children: (0, $8fc2a26ec668dd68$export$2d919ab09ad7f058)(i?.snippet?.publishTime)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                    className: "mt-[35px] text-gray-600 text-[15px]",
                                    children: i.snippet.description
                                })
                            ]
                        })
                    ]
                }, i.id.channelId)
            });
        })
    }) : "null";
}




function $982b8bfe8cf72a8e$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        className: "ml-[400px]",
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("iframe", {
            width: "950",
            height: "550",
            src: "https://www.youtube.com/embed/FtIkjecEFRY",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;    picture-in-picture; web-share"
        })
    });
}


const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactredux.Provider), {
            store: (0, $99d4edb84bf9b207$export$2e2bcd8739ae039),
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $23f2aa1532eda93b$export$2e2bcd8739ae039), {}),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $f461d0ec77779c02$export$2e2bcd8739ae039), {}),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Outlet), {})
            ]
        })
    });
};
const $da11a1101b2a894a$var$router = (0, $9WItx$reactrouterdom.createBrowserRouter)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$App, {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $1ed2dfed0167440e$export$2e2bcd8739ae039), {})
            },
            {
                path: "/watchvideo/:id",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $d60a12dbb98e7740$export$2e2bcd8739ae039), {})
            },
            {
                path: "/search/:query",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $443c27a9bd005e6e$export$2e2bcd8739ae039), {})
            },
            {
                path: "/shorts",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $982b8bfe8cf72a8e$export$2e2bcd8739ae039), {})
            }
        ]
    }
]);
const $da11a1101b2a894a$var$root = (0, ($parcel$interopDefault($9WItx$reactdomclient))).createRoot(document.getElementById("root"));
$da11a1101b2a894a$var$root.render(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.RouterProvider), {
    router: $da11a1101b2a894a$var$router
}));


//# sourceMappingURL=index.js.map
