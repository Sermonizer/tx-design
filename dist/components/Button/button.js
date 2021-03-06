var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
/**
 * ### Button
 * 引入方式
 * ~~~js
 * import { Button } from "tx-design"
 * ~~~
 */
export var Button = function (props) {
    var _a;
    // className: 用户自定义的classname
    var btnType = props.btnType, className = props.className, disabled = props.disabled, size = props.size, children = props.children, href = props.href, restProps = __rest(props, ["btnType", "className", "disabled", "size", "children", "href"]);
    // classnames里面放的是类，string或者obj形式, 默认添加btn的class
    // className: 用户自定义的class
    var classes = classNames("btn", className, (_a = {},
        // 可变的写法 可以是large small primary...
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        // <a>链接的disabled添加到类属性里面 因为a本身没有disabled属性 因此如果是link 且有disabled
        // 就添加一个属性
        _a.disabled = btnType === "link" && disabled,
        _a));
    if (btnType === "link" && href) {
        return (React.createElement("a", __assign({ className: classes, href: href }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: "default",
};
export default Button;
