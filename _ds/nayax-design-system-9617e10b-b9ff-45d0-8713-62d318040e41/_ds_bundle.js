/* @ds-bundle: {"format":4,"namespace":"NayaxDesignSystem_9617e1","components":[{"name":"Add","sourcePath":"components/Add.jsx"},{"name":"Arrow","sourcePath":"components/Arrow.jsx"},{"name":"ArrowRight","sourcePath":"components/ArrowRight.jsx"},{"name":"ArrowRight2","sourcePath":"components/ArrowRight2.jsx"},{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"ChevronDown","sourcePath":"components/ChevronDown.jsx"},{"name":"Divider","sourcePath":"components/Divider.jsx"},{"name":"Download16","sourcePath":"components/Download16.jsx"},{"name":"Download24","sourcePath":"components/Download24.jsx"},{"name":"Footer","sourcePath":"components/Footer.jsx"},{"name":"Help24","sourcePath":"components/Help24.jsx"},{"name":"Link","sourcePath":"components/Link.jsx"},{"name":"Loading","sourcePath":"components/Loading.jsx"},{"name":"Loading2","sourcePath":"components/Loading2.jsx"},{"name":"Location","sourcePath":"components/Location.jsx"},{"name":"Logo","sourcePath":"components/Logo.jsx"},{"name":"Overlay","sourcePath":"components/Overlay.jsx"},{"name":"Phone","sourcePath":"components/Phone.jsx"},{"name":"SecondaryButton","sourcePath":"components/SecondaryButton.jsx"},{"name":"TextInput","sourcePath":"components/TextInput.jsx"}],"sourceHashes":{"assets/icons.js":"d034962273c5","components/Add.jsx":"db4131a6696d","components/Arrow.jsx":"e23410964a58","components/ArrowRight.jsx":"47789d39f03f","components/ArrowRight2.jsx":"0f1e1fe5926f","components/Button.jsx":"e989ac56609c","components/ChevronDown.jsx":"f3bd3c6e4611","components/Divider.jsx":"c54b5132c86f","components/Download16.jsx":"160b57416e22","components/Download24.jsx":"220b2669c60d","components/Footer.jsx":"09b462a2ccf4","components/Help24.jsx":"6a2be099ef24","components/Link.jsx":"90b1ce636409","components/Loading.jsx":"eabc013d7d7e","components/Loading2.jsx":"2699c35dae6a","components/Location.jsx":"2c930789ebcd","components/Logo.jsx":"2bafa9a50a7e","components/Overlay.jsx":"75a878874361","components/Phone.jsx":"ac818e736c2c","components/SecondaryButton.jsx":"3cfc7e3c47e3","components/TextInput.jsx":"113da34b10ad","components/master002base.jsx":"cdb38aeefcc6","components/master00base.jsx":"f333e40d4d50","icons/canvas.jsx":"0bca3916724a","icons/design-canvas.jsx":"5d0e39003628","icons/icons.jsx":"9feb03247a29","promotion/canvas.jsx":"5e2b5e9afe09","promotion/design-canvas.jsx":"5d0e39003628","promotion/home-screen.jsx":"4e8a8e0627ce","promotion/icons.jsx":"88e50cd06ea7","promotion/ios-frame.jsx":"d67eb3ffe562","promotion/promo-card.jsx":"bf92e3622d7d","promotion/webview-screen.jsx":"a6a6296bbd92"},"inlinedExternals":[],"unexposedExports":[{"name":"master002base","sourcePath":"components/master002base.jsx"},{"name":"master00base","sourcePath":"components/master00base.jsx"}]} */

(() => {

const __ds_ns = (window.NayaxDesignSystem_9617e1 = window.NayaxDesignSystem_9617e1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons.js
try { (() => {
/* Nayax icon set — inline SVG paths from the design system.
   24×24 viewport, non-zero fill rule. Pass `fill` or CSS `color`. */

window.NayaxIcons = function () {
  const mk = (w, h, left, top, d, frule) => ({
    w: 24,
    h: 24,
    render: (fill = 'currentColor') => `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(${left} ${top})">
          <path d="${d}" fill="${fill}" fill-rule="${frule || 'nonzero'}" />
        </g>
      </svg>`
  });
  const icons = {
    chevronRight: mk(6.708, 11.308, 8.346, 6.346, 'M 4.6 5.654 L 0 1.054 L 1.054 0 L 6.708 5.654 L 1.054 11.308 L 0 10.254 L 4.6 5.654 Z'),
    chevronLeft: mk(6.708, 11.308, 8.346, 6.346, 'M 2.108 5.654 L 6.708 10.254 L 5.654 11.308 L 0 5.654 L 5.654 0 L 6.708 1.054 L 2.108 5.654 Z'),
    chevronDown: mk(11.308, 6.708, 6.346, 8.346, 'M 5.654 6.708 L 0 1.054 L 1.054 0 L 5.654 4.6 L 10.254 0 L 11.308 1.054 L 5.654 6.708 Z'),
    chevronUp: mk(11.308, 6.708, 6.346, 8.346, 'M 5.654 0 L 0 5.654 L 1.054 6.708 L 5.654 2.108 L 10.254 6.708 L 11.308 5.654 L 5.654 0 Z'),
    close: mk(13.308, 13.308, 5.346, 5.346, 'M 1.054 13.308 L 0 12.254 L 5.6 6.654 L 0 1.054 L 1.054 0 L 6.654 5.6 L 12.254 0 L 13.308 1.054 L 7.708 6.654 L 13.308 12.254 L 12.254 13.308 L 6.654 7.708 L 1.054 13.308 Z'),
    check: mk(15.569, 11.304, 4.215, 6.35, 'M 5.335 11.304 L 0 5.969 L 1.069 4.9 L 5.335 9.165 L 14.5 0 L 15.569 1.069 L 5.335 11.304 Z'),
    arrowRight: mk(14.983, 15.001, 4.593, 3.999, 'M 7.782 0.087 C 9.317 3.028 11.716 5.428 14.656 6.962 C 15.092 7.189 15.092 7.813 14.656 8.04 C 11.716 9.574 9.317 11.974 7.782 14.914 L 7.736 15.001 L 7.243 14.744 L 6.749 14.486 L 6.794 14.399 C 8.13 11.839 10.081 9.663 12.458 8.058 L 0 8.058 L 0 6.943 L 12.458 6.943 C 10.082 5.338 8.13 3.163 6.794 0.603 L 6.749 0.516 L 7.736 0 L 7.782 0.087 Z'),
    add: mk(13, 13, 5.5, 5.5, 'M 5.75 7.25 L 0 7.25 L 0 5.75 L 5.75 5.75 L 5.75 0 L 7.25 0 L 7.25 5.75 L 13 5.75 L 13 7.25 L 7.25 7.25 L 7.25 13 L 5.75 13 L 5.75 7.25 Z'),
    minus: mk(13, 1.5, 5.5, 11.25, 'M 0 0 L 13 0 L 13 1.5 L 0 1.5 L 0 0 Z')
  };

  // Files copied from /assets/icons/*.svg — resolved lazily
  const fileIcons = {
    coffee: 'assets/icons/coffee.svg',
    coins: 'assets/icons/coins.svg',
    ev: 'assets/icons/ev.svg',
    store: 'assets/icons/store.svg',
    laundry: 'assets/icons/laundry.svg',
    payment: 'assets/icons/payment.svg',
    battery: 'assets/icons/battery.svg',
    amusement: 'assets/icons/amusement.svg',
    cart: 'assets/icons/cart.svg',
    user: 'assets/icons/user.svg',
    search: 'assets/icons/search.svg',
    mail: 'assets/icons/mail.svg',
    card: 'assets/icons/card.svg',
    receipt: 'assets/icons/receipt.svg',
    delete: 'assets/icons/delete.svg',
    lock: 'assets/icons/lock.svg',
    shipping: 'assets/icons/shipping.svg',
    faq: 'assets/icons/faq.svg',
    settings: 'assets/icons/settings.svg',
    edit: 'assets/icons/edit.svg',
    moreVert: 'assets/icons/more-vert.svg',
    info: 'assets/icons/info.svg',
    coupon: 'assets/icons/coupon.svg',
    timer: 'assets/icons/timer.svg',
    download: 'assets/icons/download.svg',
    phone: 'assets/icons/phone-shared.svg',
    location: 'assets/icons/location-shared.svg',
    success: 'assets/icons/success-shared.svg'
  };
  function html(name, size = 24, color = 'currentColor') {
    if (icons[name]) {
      const svg = icons[name].render(color);
      return `<span style="display:inline-flex;width:${size}px;height:${size}px;color:${color}">${svg.replace('width="24" height="24"', `width="${size}" height="${size}"`)}</span>`;
    }
    if (fileIcons[name]) {
      return `<img src="${fileIcons[name]}" width="${size}" height="${size}" style="display:inline-block;vertical-align:middle" alt="${name}" />`;
    }
    return '';
  }
  return {
    html,
    inline: icons,
    files: fileIcons
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons.js", error: String((e && e.message) || e) }); }

// components/Add.jsx
try { (() => {
// figma node: 1:421 add
function Add(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-base-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.5,
      top: 5.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.75 7.25 L 0 7.25 L 0 5.75 L 5.75 5.75 L 5.75 0 L 7.25 0 L 7.25 5.75 L 13 5.75 L 13 7.25 L 7.25 7.25 L 7.25 13 L 5.75 13 L 5.75 7.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { Add, __ds_default_components_Add_1gzs42r: Add });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Add.jsx", error: String((e && e.message) || e) }); }

// components/Arrow.jsx
try { (() => {
// figma node: 1:1732 Arrow (4 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "direction=" + __venc(p.direction) + '|' + "state=" + __venc(p.state);
function Arrow(_p = {}) {
  const props = {
    ..._p,
    direction: _p.direction ?? "right",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(38,38,38)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,1,14.500)",
      transformOrigin: "0 0",
      width: 13,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 1,
    viewBox: "0 -0.500 12 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,0,6.500)",
      transformOrigin: "0 0",
      width: 12,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 12 0.5 L 12 0 L 12 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.192,
    height: 9.192,
    viewBox: "0 0 9.192 9.192",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,6.500,0)",
      transformOrigin: "0 0",
      width: 9.192,
      height: 9.192
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.166 0.084 L 8.689 -0.066 L 9.166 0.084 Z M 9.166 9.108 L 8.689 9.258 L 9.166 9.108 Z M 9.108 0.026 L 8.959 -0.451 L 9.108 0.026 Z M 0 0 L -0.15 0.477 L -0.066 0.503 L 0.084 0.026 L 0.234 -0.451 L 0.15 -0.477 L 0 0 Z M 9.166 9.108 L 8.689 9.258 L 8.715 9.342 L 9.192 9.192 L 9.669 9.042 L 9.643 8.959 L 9.166 9.108 Z M 9.166 0.084 L 8.689 -0.066 C 7.735 2.969 7.735 6.223 8.689 9.258 L 9.166 9.108 L 9.643 8.959 C 8.751 6.119 8.751 3.074 9.643 0.234 L 9.166 0.084 Z M 0.084 0.026 L -0.066 0.503 C 2.969 1.457 6.223 1.457 9.258 0.503 L 9.108 0.026 L 8.959 -0.451 C 6.119 0.442 3.074 0.442 0.234 -0.451 L 0.084 0.026 Z M 9.108 0.026 L 9.258 0.503 C 8.908 0.613 8.579 0.284 8.689 -0.066 L 9.166 0.084 L 9.643 0.234 C 9.775 -0.187 9.379 -0.583 8.959 -0.451 L 9.108 0.026 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(38,38,38)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1.5,
      width: 13,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 1,
    viewBox: "0 -0.500 12 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,0,6.500)",
      transformOrigin: "0 0",
      width: 12,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 12 0.5 L 12 0 L 12 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.192,
    height: 9.192,
    viewBox: "0 0 9.192 9.192",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,6.500,0)",
      transformOrigin: "0 0",
      width: 9.192,
      height: 9.192
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.166 0.084 L 8.689 -0.066 L 9.166 0.084 Z M 9.166 9.108 L 8.689 9.258 L 9.166 9.108 Z M 9.108 0.026 L 8.959 -0.451 L 9.108 0.026 Z M 0 0 L -0.15 0.477 L -0.066 0.503 L 0.084 0.026 L 0.234 -0.451 L 0.15 -0.477 L 0 0 Z M 9.166 9.108 L 8.689 9.258 L 8.715 9.342 L 9.192 9.192 L 9.669 9.042 L 9.643 8.959 L 9.166 9.108 Z M 9.166 0.084 L 8.689 -0.066 C 7.735 2.969 7.735 6.223 8.689 9.258 L 9.166 9.108 L 9.643 8.959 C 8.751 6.119 8.751 3.074 9.643 0.234 L 9.166 0.084 Z M 0.084 0.026 L -0.066 0.503 C 2.969 1.457 6.223 1.457 9.258 0.503 L 9.108 0.026 L 8.959 -0.451 C 6.119 0.442 3.074 0.442 0.234 -0.451 L 0.084 0.026 Z M 9.108 0.026 L 9.258 0.503 C 8.908 0.613 8.579 0.284 8.689 -0.066 L 9.166 0.084 L 9.643 0.234 C 9.775 -0.187 9.379 -0.583 8.959 -0.451 L 9.108 0.026 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--purple-0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,1,14.500)",
      transformOrigin: "0 0",
      width: 13,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 1,
    viewBox: "0 -0.500 12 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,0,6.500)",
      transformOrigin: "0 0",
      width: 12,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 12 0.5 L 12 0 L 12 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.192,
    height: 9.192,
    viewBox: "0 0 9.192 9.192",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,6.500,0)",
      transformOrigin: "0 0",
      width: 9.192,
      height: 9.192
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.166 0.084 L 8.689 -0.066 L 9.166 0.084 Z M 9.166 9.108 L 8.689 9.258 L 9.166 9.108 Z M 9.108 0.026 L 8.959 -0.451 L 9.108 0.026 Z M 0 0 L -0.15 0.477 L -0.066 0.503 L 0.084 0.026 L 0.234 -0.451 L 0.15 -0.477 L 0 0 Z M 9.166 9.108 L 8.689 9.258 L 8.715 9.342 L 9.192 9.192 L 9.669 9.042 L 9.643 8.959 L 9.166 9.108 Z M 9.166 0.084 L 8.689 -0.066 C 7.735 2.969 7.735 6.223 8.689 9.258 L 9.166 9.108 L 9.643 8.959 C 8.751 6.119 8.751 3.074 9.643 0.234 L 9.166 0.084 Z M 0.084 0.026 L -0.066 0.503 C 2.969 1.457 6.223 1.457 9.258 0.503 L 9.108 0.026 L 8.959 -0.451 C 6.119 0.442 3.074 0.442 0.234 -0.451 L 0.084 0.026 Z M 9.108 0.026 L 9.258 0.503 C 8.908 0.613 8.579 0.284 8.689 -0.066 L 9.166 0.084 L 9.643 0.234 C 9.775 -0.187 9.379 -0.583 8.959 -0.451 L 9.108 0.026 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--purple-0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1.5,
      width: 13,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 1,
    viewBox: "0 -0.500 12 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,0,6.500)",
      transformOrigin: "0 0",
      width: 12,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 12 0.5 L 12 0 L 12 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.192,
    height: 9.192,
    viewBox: "0 0 9.192 9.192",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,6.500,0)",
      transformOrigin: "0 0",
      width: 9.192,
      height: 9.192
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.166 0.084 L 8.689 -0.066 L 9.166 0.084 Z M 9.166 9.108 L 8.689 9.258 L 9.166 9.108 Z M 9.108 0.026 L 8.959 -0.451 L 9.108 0.026 Z M 0 0 L -0.15 0.477 L -0.066 0.503 L 0.084 0.026 L 0.234 -0.451 L 0.15 -0.477 L 0 0 Z M 9.166 9.108 L 8.689 9.258 L 8.715 9.342 L 9.192 9.192 L 9.669 9.042 L 9.643 8.959 L 9.166 9.108 Z M 9.166 0.084 L 8.689 -0.066 C 7.735 2.969 7.735 6.223 8.689 9.258 L 9.166 9.108 L 9.643 8.959 C 8.751 6.119 8.751 3.074 9.643 0.234 L 9.166 0.084 Z M 0.084 0.026 L -0.066 0.503 C 2.969 1.457 6.223 1.457 9.258 0.503 L 9.108 0.026 L 8.959 -0.451 C 6.119 0.442 3.074 0.442 0.234 -0.451 L 0.084 0.026 Z M 9.108 0.026 L 9.258 0.503 C 8.908 0.613 8.579 0.284 8.689 -0.066 L 9.166 0.084 L 9.643 0.234 C 9.775 -0.187 9.379 -0.583 8.959 -0.451 L 9.108 0.026 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Direction=left, State=Default
    "direction=left|state=default": __body0,
    // figma: Direction=Right, State=Default
    "direction=right|state=default": __body1,
    // figma: Direction=left, State=Hover
    "direction=left|state=hover": __body2,
    // figma: Direction=Right, State=Hover
    "direction=right|state=hover": __body3
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
Object.assign(__ds_scope, { Arrow, __ds_default_components_Arrow_xa9y4l: Arrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Arrow.jsx", error: String((e && e.message) || e) }); }

// components/ArrowRight.jsx
try { (() => {
// figma node: 1:40 arrow-right
function ArrowRight(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--icon-base-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.983,
    height: 15.001,
    viewBox: "0 0 14.983 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.593,
      top: 3.999,
      width: 14.983,
      height: 15.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.782 0.087 C 9.317 3.028 11.716 5.428 14.656 6.962 C 15.092 7.189 15.092 7.813 14.656 8.04 C 11.716 9.574 9.317 11.974 7.782 14.914 L 7.736 15.001 L 7.243 14.744 L 6.749 14.486 L 6.794 14.399 C 8.13 11.839 10.081 9.663 12.458 8.058 L 0 8.058 L 0 6.943 L 12.458 6.943 C 10.082 5.338 8.13 3.163 6.794 0.603 L 6.749 0.516 L 7.736 0 L 7.782 0.087 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { ArrowRight, __ds_default_components_ArrowRight_11iejb7: ArrowRight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ArrowRight.jsx", error: String((e && e.message) || e) }); }

// components/ArrowRight2.jsx
try { (() => {
// figma node: 1:396 arrow-right
function ArrowRight2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--icon-base-default-2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.983,
    height: 15.001,
    viewBox: "0 0 14.983 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.593,
      top: 3.999,
      width: 14.983,
      height: 15.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.782 0.087 C 9.317 3.028 11.716 5.428 14.656 6.962 C 15.092 7.189 15.092 7.813 14.656 8.04 C 11.716 9.574 9.317 11.974 7.782 14.914 L 7.736 15.001 L 7.243 14.744 L 6.749 14.486 L 6.794 14.399 C 8.13 11.839 10.081 9.663 12.458 8.058 L 0 8.058 L 0 6.943 L 12.458 6.943 C 10.082 5.338 8.13 3.163 6.794 0.603 L 6.749 0.516 L 7.736 0 L 7.782 0.087 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { ArrowRight2, __ds_default_components_ArrowRight2_ucerpx: ArrowRight2 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ArrowRight2.jsx", error: String((e && e.message) || e) }); }

// components/ChevronDown.jsx
try { (() => {
// figma node: 1:366 chevron-down
function ChevronDown(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-base-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.150,
    height: 8.493,
    viewBox: "0 0 14.150 8.493",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8,19.148)",
      transformOrigin: "0 0",
      width: 14.15,
      height: 8.493
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.078 8.493 L 0 1.414 L 1.414 0 L 7.071 5.657 L 12.728 0 L 14.15 1.422 L 7.078 8.493 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { ChevronDown, __ds_default_components_ChevronDown_17w5zd3: ChevronDown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ChevronDown.jsx", error: String((e && e.message) || e) }); }

// components/Divider.jsx
try { (() => {
// figma node: 1:349 Divider (6 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "color=" + __venc(p.color) + '|' + "spacing=" + __venc(p.spacing);
function Divider(_p = {}) {
  const props = {
    ..._p,
    color: _p.color ?? "base",
    spacing: _p.spacing ?? "0px"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--divider-subdued)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--divider-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--divider-subdued)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--divider-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--divider-subdued)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--divider-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: Color=Subdued, Spacing=8px
    "color=subdued|spacing=8px": __body0,
    // figma: Color=Base, Spacing=8px
    "color=base|spacing=8px": __body1,
    // figma: Color=Subdued, Spacing=0px
    "color=subdued|spacing=0px": __body2,
    // figma: Color=Base, Spacing=0px
    "color=base|spacing=0px": __body3,
    // figma: Color=Subdued, Spacing=16 px
    "color=subdued|spacing=16 px": __body4,
    // figma: Color=Base, Spacing=16 px
    "color=base|spacing=16 px": __body5
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
Object.assign(__ds_scope, { Divider, __ds_default_components_Divider_9e2ngh: Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Divider.jsx", error: String((e && e.message) || e) }); }

// components/Download16.jsx
try { (() => {
// figma node: 1:1729 download-16
function Download16(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(38,38,38)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 3,
    viewBox: "0 0 13 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 10.5,
      width: 13,
      height: 3,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 0 C 0.5 -0.276 0.276 -0.5 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 L 0 0 L 0.5 0 Z M 13.5 0 C 13.5 -0.276 13.276 -0.5 13 -0.5 C 12.724 -0.5 12.5 -0.276 12.5 0 L 13 0 L 13.5 0 Z M 11 3 L 11 2.5 L 2 2.5 L 2 3 L 2 3.5 L 11 3.5 L 11 3 Z M 0 1 L 0.5 1 L 0.5 0 L 0 0 L -0.5 0 L -0.5 1 L 0 1 Z M 13 0 L 12.5 0 L 12.5 1 L 13 1 L 13.5 1 L 13.5 0 L 13 0 Z M 2 3 L 2 2.5 C 1.172 2.5 0.5 1.828 0.5 1 L 0 1 L -0.5 1 C -0.5 2.381 0.619 3.5 2 3.5 L 2 3 Z M 11 3 L 11 3.5 C 12.381 3.5 13.5 2.381 13.5 1 L 13 1 L 12.5 1 C 12.5 1.828 11.828 2.5 11 2.5 L 11 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.657,
    height: 5.657,
    viewBox: "0 0 5.657 5.657",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.707,0.707,-0.707,-0.707,12,6.500)",
      transformOrigin: "0 0",
      width: 5.657,
      height: 5.657
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.354 5.303 C -0.549 5.499 -0.549 5.815 -0.354 6.01 C -0.158 6.206 0.158 6.206 0.354 6.01 L 0 5.657 L -0.354 5.303 Z M 5.657 0 L 6.157 0 C 6.157 -0.276 5.933 -0.5 5.657 -0.5 L 5.657 0 Z M 1.657 -0.5 C 1.381 -0.5 1.157 -0.276 1.157 0 C 1.157 0.276 1.381 0.5 1.657 0.5 L 1.657 0 L 1.657 -0.5 Z M 5.157 4 C 5.157 4.276 5.381 4.5 5.657 4.5 C 5.933 4.5 6.157 4.276 6.157 4 L 5.657 4 L 5.157 4 Z M 0 5.657 L 0.354 6.01 L 6.01 0.354 L 5.657 0 L 5.303 -0.354 L -0.354 5.303 L 0 5.657 Z M 5.657 0 L 5.657 -0.5 L 1.657 -0.5 L 1.657 0 L 1.657 0.5 L 5.657 0.5 L 5.657 0 Z M 5.657 0 L 5.157 0 L 5.157 4 L 5.657 4 L 6.157 4 L 6.157 0 L 5.657 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { Download16, __ds_default_components_Download16_uo5iah: Download16 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Download16.jsx", error: String((e && e.message) || e) }); }

// components/Download24.jsx
try { (() => {
// figma node: 1:1724 download-24
function Download24(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(38,38,38)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 3,
      width: 16,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 5,
    viewBox: "0 0 16 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 12,
      width: 16,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -1 0 L -1 2 L 0 2 L 1 2 L 1 0 L 0 0 Z M 3 5 L 3 6 L 13 6 L 13 5 L 13 4 L 3 4 L 3 5 Z M 16 2 L 17 2 L 17 0 L 16 0 L 15 0 L 15 2 L 16 2 Z M 13 5 L 13 6 C 15.209 6 17 4.209 17 2 L 16 2 L 15 2 C 15 3.105 14.105 4 13 4 L 13 5 Z M 0 2 L -1 2 C -1 4.209 0.791 6 3 6 L 3 5 L 3 4 C 1.895 4 1 3.105 1 2 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 12,
    viewBox: "0 0 9 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.5,
      top: 0,
      width: 9,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 12 L 3.793 12.707 L 4.5 13.414 L 5.207 12.707 L 4.5 12 Z M 4.5 0 L 3.5 0 L 3.5 12 L 4.5 12 L 5.5 12 L 5.5 0 L 4.5 0 Z M 4.5 12 L 5.207 11.293 L 0.707 6.793 L 0 7.5 L -0.707 8.207 L 3.793 12.707 L 4.5 12 Z M 4.5 12 L 5.207 12.707 L 9.707 8.207 L 9 7.5 L 8.293 6.793 L 3.793 11.293 L 4.5 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
Object.assign(__ds_scope, { Download24, __ds_default_components_Download24_uo5ibc: Download24 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Download24.jsx", error: String((e && e.message) || e) }); }

// components/Help24.jsx
try { (() => {
// figma node: 1:32 help-24 (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "isBold=" + __venc(p.isBold);
function Help24(_p = {}) {
  const props = {
    ..._p,
    isBold: _p.isBold ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px var(--purple-0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 7,
      width: 9,
      height: 10,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      color: "var(--purple-0)"
    }
  }, props.text1 ?? "?"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px var(--purple-0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 7,
      width: 9,
      height: 10,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      color: "var(--purple-0)"
    }
  }, props.text1 ?? "?"));
  const __impls = {
    // figma: Is bold=yes
    "isBold=true": __body0,
    // figma: Is bold=no
    "isBold=false": __body1
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
Object.assign(__ds_scope, { Help24, __ds_default_components_Help24_11880y1: Help24 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Help24.jsx", error: String((e && e.message) || e) }); }

// components/Loading.jsx
try { (() => {
// figma node: 1:52 loading
function Loading(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      color: "var(--icon-base-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 18.5 C 14.694 18.5 18.5 14.694 18.5 10 C 18.5 5.306 14.694 1.5 10 1.5 C 5.306 1.5 1.5 5.306 1.5 10 C 1.5 14.694 5.306 18.5 10 18.5 Z M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 10,
      height: 10,
      borderRadius: 1,
      color: "var(--icon-inverted-subdued)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.25 1.533 C 5.154 1.891 1.891 5.154 1.533 9.25 C 1.497 9.663 1.164 10 0.75 10 C 0.336 10 -0.003 9.663 0.028 9.25 C 0.393 4.325 4.325 0.393 9.25 0.028 C 9.663 -0.003 10 0.336 10 0.75 C 10 1.164 9.663 1.497 9.25 1.533 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { Loading, __ds_default_components_Loading_15nyzug: Loading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Loading.jsx", error: String((e && e.message) || e) }); }

// components/Loading2.jsx
try { (() => {
// figma node: 1:98 loading
function Loading2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      color: "var(--icon-base-default-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 18.5 C 14.694 18.5 18.5 14.694 18.5 10 C 18.5 5.306 14.694 1.5 10 1.5 C 5.306 1.5 1.5 5.306 1.5 10 C 1.5 14.694 5.306 18.5 10 18.5 Z M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 10,
      height: 10,
      borderRadius: 1,
      color: "var(--icon-inverted-subdued-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.25 1.533 C 5.154 1.891 1.891 5.154 1.533 9.25 C 1.497 9.663 1.164 10 0.75 10 C 0.336 10 -0.003 9.663 0.028 9.25 C 0.393 4.325 4.325 0.393 9.25 0.028 C 9.663 -0.003 10 0.336 10 0.75 C 10 1.164 9.663 1.497 9.25 1.533 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { Loading2, __ds_default_components_Loading2_pdxtey: Loading2 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Loading2.jsx", error: String((e && e.message) || e) }); }

// components/Location.jsx
try { (() => {
// figma node: 1:362 location
function Location(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-base-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.096,
    height: 19.010,
    viewBox: "0 0 15.096 19.010",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.452,
      top: 2.5,
      width: 15.096,
      height: 19.01
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.55 9.365 C 8.047 9.365 8.473 9.188 8.826 8.834 C 9.179 8.479 9.356 8.054 9.356 7.556 C 9.356 7.058 9.179 6.633 8.824 6.28 C 8.47 5.927 8.044 5.75 7.546 5.75 C 7.049 5.75 6.623 5.927 6.27 6.282 C 5.917 6.636 5.74 7.062 5.74 7.56 C 5.74 8.057 5.917 8.482 6.272 8.836 C 6.626 9.189 7.052 9.365 7.55 9.365 Z M 7.548 17.014 C 9.504 15.262 11.001 13.582 12.039 11.974 C 13.077 10.366 13.596 8.957 13.596 7.748 C 13.596 5.925 13.017 4.426 11.858 3.252 C 10.7 2.078 9.263 1.49 7.548 1.49 C 5.833 1.49 4.396 2.078 3.237 3.252 C 2.079 4.426 1.5 5.925 1.5 7.748 C 1.5 8.957 2.019 10.366 3.057 11.974 C 4.095 13.582 5.592 15.262 7.548 17.014 Z M 7.548 19.01 C 5.031 16.829 3.144 14.799 1.886 12.921 C 0.629 11.043 0 9.318 0 7.748 C 0 5.44 0.746 3.572 2.239 2.143 C 3.732 0.714 5.502 0 7.548 0 C 9.594 0 11.364 0.714 12.857 2.143 C 14.35 3.572 15.096 5.44 15.096 7.748 C 15.096 9.318 14.467 11.043 13.21 12.921 C 11.952 14.799 10.065 16.829 7.548 19.01 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { Location, __ds_default_components_Location_qmnjf7: Location });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Location.jsx", error: String((e && e.message) || e) }); }

// components/Logo.jsx
try { (() => {
// figma node: 1:1377 logo (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "size=" + __venc(p.size);
function Logo(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "long"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 68,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.422,
      top: 4.676,
      width: 60.128,
      height: 16.817,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.549,
    height: 14.334,
    viewBox: "0 0 12.549 14.334",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.549,
      height: 14.334,
      color: "rgb(38,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.532 0 L 9.532 8.956 L 2.774 0 L 0 0 L 0 14.334 L 3.016 14.334 L 3.016 5.211 L 8.364 12.189 C 9.782 11.486 11.279 10.851 12.336 10.537 L 12.549 10.474 L 12.549 0 L 9.533 0 L 9.532 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.459,
    height: 3.052,
    viewBox: "0 0 6.459 3.052",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.089,
      top: 11.281,
      width: 6.459,
      height: 3.052,
      color: "rgb(255,205,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.459 3.052 L 6.459 0 C 4.806 0.492 2.031 1.8 0.278 2.878 C 0.215 2.916 0.153 2.954 0.094 2.992 C 0.062 3.012 0.03 3.032 0 3.052 L 6.459 3.052 L 6.459 3.052 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.850,
    height: 11.021,
    viewBox: "0 0 10.850 11.021",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.278,
      top: 3.313,
      width: 10.85,
      height: 11.021,
      color: "rgb(38,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.85 0 L 7.551 0 L 5.553 3.125 L 3.298 0 L 0 0 L 3.904 5.51 L 0.511 11.021 L 3.809 11.021 L 5.553 8.001 L 7.551 11.021 L 10.85 11.021 L 7.202 5.51 L 10.85 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.836,
    height: 13.504,
    viewBox: "0 0 11.836 13.504",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.697,
      top: 3.313,
      width: 11.836,
      height: 13.504,
      color: "rgb(38,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.735 0 L 5.977 6.606 L 3.173 0 L 0 0 L 4.526 10.081 L 3.096 13.504 L 5.981 13.504 L 11.836 0 L 8.735 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.246,
    height: 11.323,
    viewBox: "0 0 11.246 11.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.713,
      top: 3.313,
      width: 11.246,
      height: 11.323,
      color: "rgb(38,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.246 0 L 11.246 11.021 L 8.945 11.021 L 8.771 9.939 C 7.962 10.794 6.871 11.323 5.54 11.323 C 1.974 11.323 0 8.789 0 5.662 C 0 2.535 2.057 0 5.54 0 C 6.907 0 7.959 0.53 8.729 1.301 L 8.945 0 L 11.246 0 Z M 5.54 2.709 C 3.585 2.709 2.651 4.03 2.651 5.661 C 2.651 7.292 3.544 8.613 5.54 8.613 C 7.467 8.613 8.429 7.292 8.429 5.661 C 8.429 4.03 7.384 2.709 5.54 2.709 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.246,
    height: 11.323,
    viewBox: "0 0 11.246 11.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.088,
      top: 3.313,
      width: 11.246,
      height: 11.323,
      color: "rgb(38,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.246 0 L 11.246 11.021 L 8.945 11.021 L 8.771 9.939 C 7.962 10.794 6.871 11.323 5.54 11.323 C 1.974 11.323 0 8.789 0 5.662 C 0 2.535 2.057 0 5.54 0 C 6.907 0 7.959 0.53 8.729 1.301 L 8.945 0 L 11.246 0 Z M 5.54 2.709 C 3.585 2.709 2.651 4.03 2.651 5.661 C 2.651 7.292 3.544 8.613 5.54 8.613 C 7.467 8.613 8.429 7.292 8.429 5.661 C 8.429 4.03 7.384 2.709 5.54 2.709 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 21,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.422,
      top: 4.676,
      width: 12.549,
      height: 14.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.549,
    height: 14.334,
    viewBox: "0 0 12.549 14.334",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.549,
      height: 14.334,
      color: "rgb(38,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.532 0 L 9.532 8.956 L 2.774 0 L 0 0 L 0 14.334 L 3.016 14.334 L 3.016 5.211 L 8.364 12.189 C 9.782 11.486 11.279 10.851 12.336 10.537 L 12.549 10.474 L 12.549 0 L 9.533 0 L 9.532 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.459,
    height: 3.052,
    viewBox: "0 0 6.459 3.052",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.089,
      top: 11.281,
      width: 6.459,
      height: 3.052,
      color: "rgb(255,205,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.459 3.052 L 6.459 0 C 4.806 0.492 2.031 1.8 0.278 2.878 C 0.215 2.916 0.153 2.954 0.094 2.992 C 0.062 3.012 0.03 3.032 0 3.052 L 6.459 3.052 L 6.459 3.052 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: size=long
    "size=long": __body0,
    // figma: size=short
    "size=short": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Logo, __ds_default_components_Logo_182b5jf: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Logo.jsx", error: String((e && e.message) || e) }); }

// components/Overlay.jsx
try { (() => {
// figma node: 1:1887 Overlay (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint);
function Overlay(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "all (xs-xxl)"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 700,
      opacity: 0.3,
      backgroundColor: "var(--surface-inverted-default)",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      opacity: 0.3,
      backgroundColor: "var(--surface-inverted-default)",
      position: "relative",
      ...props.style
    }
  });
  const __impls = {
    // figma: Breakpoint=All (XS-XXL)
    "breakpoint=all (xs-xxl)": __body0,
    // figma: Breakpoint=Mobile (XS-S)
    "breakpoint=mobile (xs-s)": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Overlay, __ds_default_components_Overlay_13bt15o: Overlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Overlay.jsx", error: String((e && e.message) || e) }); }

// components/Phone.jsx
try { (() => {
// figma node: 1:368 phone
function Phone(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-base-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 17,
    viewBox: "0 0 17 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.5,
      top: 3.5,
      width: 17,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.94 17 C 14.056 17 12.163 16.562 10.26 15.686 C 8.359 14.809 6.611 13.573 5.018 11.977 C 3.425 10.381 2.191 8.633 1.315 6.734 C 0.438 4.836 0 2.944 0 1.06 C 0 0.757 0.1 0.505 0.3 0.303 C 0.5 0.101 0.75 0 1.05 0 L 4.312 0 C 4.564 0 4.787 0.082 4.98 0.247 C 5.173 0.412 5.296 0.615 5.348 0.858 L 5.921 3.8 C 5.961 4.073 5.953 4.308 5.896 4.504 C 5.84 4.7 5.738 4.865 5.592 4.998 L 3.283 7.246 C 3.654 7.927 4.079 8.571 4.557 9.178 C 5.034 9.785 5.551 10.365 6.108 10.917 C 6.656 11.466 7.24 11.976 7.858 12.446 C 8.476 12.917 9.143 13.355 9.86 13.76 L 12.104 11.496 C 12.26 11.333 12.45 11.219 12.672 11.154 C 12.895 11.088 13.126 11.072 13.366 11.106 L 16.142 11.671 C 16.395 11.738 16.601 11.867 16.76 12.058 C 16.92 12.249 17 12.465 17 12.708 L 17 15.95 C 17 16.25 16.899 16.5 16.697 16.7 C 16.495 16.9 16.243 17 15.94 17 Z M 2.573 5.827 L 4.358 4.119 C 4.39 4.094 4.411 4.058 4.42 4.013 C 4.43 3.969 4.428 3.927 4.416 3.888 L 3.981 1.654 C 3.968 1.603 3.946 1.564 3.914 1.538 C 3.882 1.513 3.84 1.5 3.789 1.5 L 1.65 1.5 C 1.612 1.5 1.579 1.513 1.554 1.538 C 1.528 1.564 1.515 1.596 1.515 1.635 C 1.567 2.318 1.678 3.012 1.851 3.717 C 2.023 4.422 2.264 5.126 2.573 5.827 Z M 11.273 14.469 C 11.936 14.778 12.627 15.015 13.347 15.178 C 14.067 15.341 14.74 15.438 15.365 15.469 C 15.404 15.469 15.436 15.456 15.462 15.431 C 15.487 15.405 15.5 15.373 15.5 15.335 L 15.5 13.231 C 15.5 13.179 15.487 13.138 15.462 13.106 C 15.436 13.074 15.397 13.051 15.346 13.038 L 13.246 12.612 C 13.208 12.599 13.174 12.597 13.145 12.607 C 13.116 12.616 13.086 12.637 13.054 12.669 L 11.273 14.469 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { Phone, __ds_default_components_Phone_xkng7o: Phone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Phone.jsx", error: String((e && e.message) || e) }); }

// components/Footer.jsx
try { (() => {
// figma node: 1:426 Footer (6 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint) + '|' + "state=" + __venc(p.state);
function Footer(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 886,
      backgroundColor: "var(--surface-inverted-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 64,
      width: 1216,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 557,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 72,
      lineHeight: "80px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Keep yourself", " ", "updated"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 593,
      height: 188,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--icon-base-default) * 1px)",
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--icon-base-default) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 540,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, props.text1 ?? "Join our VIP mailing list and get exclusive updates and promotions as soon as they are released"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 489,
      height: 88,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 489,
      borderRadius: 10000000,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-inverted)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingRight: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "26px",
      color: "var(--text-inverted-subdued)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Enter your email address*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--action-highlight-default) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0
    }
  }, "Submit"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.983,
    height: 15.001,
    viewBox: "0 0 14.983 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.593,
      top: 3.999,
      width: 14.983,
      height: 15.001,
      color: "var(--icon-base-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.782 0.087 C 9.317 3.028 11.716 5.428 14.656 6.962 C 15.092 7.189 15.092 7.813 14.656 8.04 C 11.716 9.574 9.317 11.974 7.782 14.914 L 7.736 15.001 L 7.243 14.744 L 6.749 14.486 L 6.794 14.399 C 8.13 11.839 10.081 9.663 12.458 8.058 L 0 8.058 L 0 6.943 L 12.458 6.943 C 10.082 5.338 8.13 3.163 6.794 0.603 L 6.749 0.516 L 7.736 0 L 7.782 0.087 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 68,
      width: 465,
      height: 20,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)"
    }
  }, props.text3 ?? "Your information will be processed in accordance with our Privacy Policy")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 316,
      width: 1216,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 365,
      width: 1216,
      height: 482.4,
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 378.4,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 116,
      height: 46.4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.152,
      top: 9.04,
      width: 116.244,
      height: 32.515,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.103,
    height: 21.891,
    viewBox: "0 0 20.103 21.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.514,
      top: 6.407,
      width: 20.103,
      height: 21.891,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.71 0 C 3.977 0 0 4.901 0 10.946 C 0 16.992 3.816 21.891 10.71 21.891 C 16.626 21.891 20.103 16.496 20.103 10.452 C 20.103 6.347 17.295 0 10.71 0 Z M 10.71 16.653 C 6.851 16.653 5.125 14.098 5.125 10.945 C 5.125 7.792 6.931 5.237 10.71 5.237 C 14.276 5.237 16.295 7.792 16.295 10.945 C 16.295 14.098 14.435 16.653 10.71 16.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.261,
    height: 27.712,
    viewBox: "0 0 24.261 27.712",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.261,
      height: 27.712,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.428 0 L 18.428 17.314 L 5.363 0 L 0 0 L 0 27.712 L 5.831 27.712 L 5.831 10.075 L 16.17 23.566 C 18.912 22.207 21.805 20.979 23.85 20.371 L 24.261 20.249 L 24.261 0 L 18.43 0 L 18.428 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.488,
    height: 5.901,
    viewBox: "0 0 12.488 5.901",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.771,
      top: 21.813,
      width: 12.488,
      height: 5.901,
      color: "var(--action-highlight-focused)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.487 5.901 L 12.487 0 C 9.292 0.952 3.927 3.48 0.537 5.563 C 0.416 5.637 0.296 5.711 0.181 5.785 C 0.119 5.824 0.059 5.862 0 5.901 L 12.488 5.901 L 12.487 5.901 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.977,
    height: 21.306,
    viewBox: "0 0 20.977 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 95.268,
      top: 6.407,
      width: 20.977,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.977 0 L 14.599 0 L 10.735 6.041 L 6.377 0 L 0 0 L 7.547 10.652 L 0.988 21.306 L 7.364 21.306 L 10.735 15.469 L 14.599 21.306 L 20.977 21.306 L 13.924 10.652 L 20.977 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.883,
    height: 26.108,
    viewBox: "0 0 22.883 26.108",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.686,
      top: 6.407,
      width: 22.883,
      height: 26.108,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.888 0 L 11.555 12.772 L 6.135 0 L 0 0 L 8.75 19.49 L 5.986 26.108 L 11.564 26.108 L 22.883 0 L 16.888 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.071,
    height: 21.306,
    viewBox: "0 0 5.071 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.184,
      top: 6.407,
      width: 5.071,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.624 21.306 L 5.071 21.306 L 5.071 0 L 0.624 0 L 0 3.766 L 0 17.414 L 0.624 21.306 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.103,
    height: 21.891,
    viewBox: "0 0 20.103 21.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.703,
      top: 6.407,
      width: 20.103,
      height: 21.891,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.71 0 C 3.977 0 0 4.901 0 10.946 C 0 16.992 3.816 21.891 10.71 21.891 C 16.626 21.891 20.103 16.496 20.103 10.452 C 20.103 6.347 17.295 0 10.71 0 Z M 10.71 16.653 C 6.851 16.653 5.125 14.098 5.125 10.945 C 5.125 7.792 6.931 5.237 10.71 5.237 C 14.276 5.237 16.295 7.792 16.295 10.945 C 16.295 14.098 14.435 16.653 10.71 16.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.072,
    height: 21.306,
    viewBox: "0 0 5.072 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 88.375,
      top: 6.407,
      width: 5.072,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.625 21.306 L 5.072 21.306 L 5.072 0 L 0.625 0 L 0 3.766 L 0 17.414 L 0.625 21.306 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 70.4,
      width: 1216,
      height: 308
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 389,
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text4 ?? "We are a leading global provider of EMV certified cashless payment solutions, telemetry system, and a management & monitoring business suite for the unattended machine industry."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 37,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "2px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Location, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "US"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      transform: "matrix(0,1,-1,0,38,0)",
      transformOrigin: "0 0",
      color: "var(--icon-inverted-default)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.ChevronDown, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Executive Plaza 1, 11350\nMccormick Road, Hunt Valley,\nMaryland 21031"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.Phone, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "(410) 666-3800")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.938,
      top: 6.961,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.562644958496094,
      height: 16.267230987548828,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.561,
    height: 16.262,
    viewBox: "0 0 8.561 16.262",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.817 4.27 L 5.817 6.072 L 8.561 6.072 L 8.119 9.079 L 5.817 9.079 L 5.817 16.175 C 5.351 16.233 4.881 16.262 4.411 16.262 C 3.814 16.263 3.218 16.217 2.628 16.126 L 2.628 9.084 L 0 9.084 L 0.052 6.072 L 2.628 6.072 L 2.628 3.477 C 2.628 1.549 4.363 -0.724 8.561 0.221 L 8.561 2.746 L 7.287 2.769 C 7.089 2.762 6.893 2.797 6.709 2.871 C 6.526 2.944 6.36 3.055 6.222 3.196 C 6.084 3.337 5.977 3.506 5.907 3.69 C 5.837 3.875 5.807 4.072 5.817 4.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 16.046,
    height: 16.405,
    viewBox: "0 0 16.046 16.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.789,
      top: 6.781,
      width: 16.046,
      height: 16.405,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.546 6.948 L 15.519 0 L 14.105 0 L 8.919 6.032 L 4.778 0 L 0 0 L 6.271 9.118 L 0 16.405 L 1.414 16.405 L 6.888 10.034 L 11.268 16.405 L 16.046 16.405 L 9.546 6.948 Z M 7.605 9.208 L 6.968 8.302 L 1.921 1.065 L 4.091 1.065 L 8.172 6.898 L 8.81 7.804 L 14.105 15.379 L 11.935 15.379 L 7.605 9.208 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.332,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.961,
      top: 6.961,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416336059570312,
      height: 13.302857398986816,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.404,
      height: 13.305,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.237,
    height: 3.237,
    viewBox: "0 0 3.237 3.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.237,
      height: 3.237,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.237 1.619 C 3.237 1.939 3.142 2.252 2.964 2.518 C 2.786 2.784 2.534 2.991 2.238 3.114 C 1.942 3.236 1.617 3.268 1.303 3.206 C 0.989 3.144 0.7 2.989 0.474 2.763 C 0.248 2.537 0.094 2.248 0.031 1.934 C -0.031 1.62 0.001 1.295 0.123 0.999 C 0.246 0.703 0.453 0.451 0.719 0.273 C 0.986 0.095 1.298 0 1.619 0 C 2.048 0 2.46 0.171 2.763 0.474 C 3.067 0.778 3.237 1.189 3.237 1.619 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.722,
    height: 8.923,
    viewBox: "0 0 2.722 8.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.258,
      top: 4.375,
      width: 2.722,
      height: 8.923,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.722 0 L 0 0 L 0 8.923 L 2.722 8.923 L 2.722 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.740,
    height: 9.180,
    viewBox: "0 0 8.740 9.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.664,
      top: 4.125,
      width: 8.74,
      height: 9.18,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.695 1.49 L 2.695 0.253 L 0 0.253 L 0 9.176 L 2.695 9.176 L 2.695 5.65 C 2.695 4.123 2.899 3.393 3.267 2.992 L 3.289 2.97 C 3.421 2.82 3.582 2.699 3.762 2.613 C 3.942 2.527 4.137 2.478 4.336 2.469 C 4.536 2.46 4.735 2.49 4.922 2.559 C 5.109 2.628 5.28 2.734 5.426 2.87 C 5.734 3.259 5.888 3.749 5.858 4.245 L 5.858 9.18 L 8.74 9.18 L 8.74 4.476 C 8.74 1.091 7.479 0.164 5.845 0.039 L 5.703 0.028 C 5.113 -0.053 4.512 0.043 3.977 0.303 C 3.441 0.563 2.995 0.976 2.695 1.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.008,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.961,
      top: 7.969,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.332720756530762,
      height: 13.33371639251709,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.894,
    height: 6.894,
    viewBox: "0 0 6.894 6.894",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.219,
      top: 3.219,
      width: 6.894,
      height: 6.894,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.448 1.227 C 3.887 1.227 4.316 1.358 4.681 1.601 C 5.046 1.845 5.331 2.192 5.499 2.598 C 5.667 3.003 5.711 3.45 5.625 3.88 C 5.54 4.311 5.328 4.706 5.018 5.017 C 4.707 5.327 4.312 5.539 3.881 5.624 C 3.451 5.71 3.004 5.666 2.599 5.498 C 2.193 5.33 1.846 5.045 1.602 4.68 C 1.359 4.315 1.228 3.886 1.228 3.447 C 1.228 2.858 1.462 2.294 1.879 1.878 C 2.295 1.461 2.859 1.227 3.448 1.227 Z M 3.448 0 C 2.766 0 2.1 0.202 1.533 0.581 C 0.966 0.959 0.524 1.498 0.263 2.128 C 0.002 2.757 -0.067 3.451 0.066 4.119 C 0.199 4.788 0.527 5.403 1.01 5.885 C 1.492 6.367 2.106 6.695 2.775 6.828 C 3.444 6.961 4.137 6.893 4.767 6.632 C 5.397 6.371 5.935 5.929 6.314 5.362 C 6.692 4.795 6.895 4.128 6.894 3.446 C 6.893 2.533 6.53 1.657 5.884 1.011 C 5.238 0.364 4.362 0.001 3.448 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.333,
    height: 13.329,
    viewBox: "0 0 13.333 13.329",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.605 1.227 C 9.933 1.227 10.259 1.292 10.562 1.418 C 10.865 1.544 11.141 1.728 11.373 1.96 C 11.606 2.192 11.79 2.468 11.915 2.772 C 12.041 3.075 12.105 3.4 12.105 3.729 L 12.105 9.602 C 12.105 9.93 12.041 10.256 11.915 10.559 C 11.79 10.863 11.606 11.138 11.373 11.371 C 11.141 11.603 10.865 11.787 10.562 11.913 C 10.259 12.039 9.933 12.103 9.605 12.103 L 3.732 12.103 C 3.403 12.104 3.078 12.04 2.774 11.914 C 2.471 11.789 2.195 11.605 1.962 11.373 C 1.73 11.142 1.545 10.866 1.419 10.563 C 1.293 10.259 1.228 9.934 1.227 9.606 L 1.227 3.733 C 1.227 3.404 1.291 3.078 1.416 2.774 C 1.542 2.47 1.726 2.194 1.958 1.961 C 2.19 1.729 2.466 1.544 2.77 1.418 C 3.074 1.292 3.399 1.227 3.728 1.227 L 9.605 1.227 Z M 9.605 0 L 3.732 0 C 2.743 0 1.794 0.393 1.094 1.092 C 0.395 1.791 0.001 2.739 0 3.728 L 0 9.601 C 0.001 10.589 0.394 11.537 1.093 12.236 C 1.792 12.935 2.739 13.328 3.728 13.329 L 9.601 13.329 C 10.589 13.329 11.537 12.937 12.237 12.239 C 12.936 11.541 13.33 10.594 13.333 9.606 L 13.333 3.733 C 13.333 2.744 12.94 1.795 12.241 1.095 C 11.542 0.395 10.594 0.001 9.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.627,
    height: 1.627,
    viewBox: "0 0 1.627 1.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.469,
      top: 2.226,
      width: 1.627,
      height: 1.627,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.627 0.813 C 1.627 0.974 1.579 1.131 1.489 1.265 C 1.4 1.399 1.273 1.503 1.124 1.565 C 0.976 1.626 0.812 1.642 0.655 1.611 C 0.497 1.58 0.352 1.502 0.238 1.388 C 0.124 1.275 0.047 1.13 0.016 0.972 C -0.016 0.814 0 0.651 0.062 0.502 C 0.123 0.353 0.228 0.226 0.361 0.137 C 0.495 0.048 0.652 0 0.813 0 C 0.92 0 1.026 0.021 1.124 0.062 C 1.223 0.103 1.313 0.163 1.388 0.238 C 1.464 0.314 1.524 0.403 1.565 0.502 C 1.605 0.601 1.627 0.706 1.627 0.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.898,
    height: 13.919,
    viewBox: "0 0 19.898 13.919",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.984,
      top: 7.969,
      width: 19.898,
      height: 13.919,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.486 2.172 C 19.26 1.316 18.582 0.638 17.726 0.413 C 16.177 0 9.949 0 9.949 0 C 9.949 0 3.721 0 2.172 0.413 C 1.316 0.638 0.638 1.316 0.413 2.172 C 0 3.721 0 6.96 0 6.96 C 0 6.96 0 10.198 0.413 11.747 C 0.638 12.604 1.316 13.281 2.172 13.507 C 3.721 13.919 9.949 13.919 9.949 13.919 C 9.949 13.919 16.177 13.919 17.726 13.507 C 18.582 13.281 19.26 12.604 19.486 11.747 C 19.898 10.198 19.898 6.96 19.898 6.96 C 19.898 6.96 19.898 3.721 19.486 2.172 Z M 7.956 9.949 L 7.956 3.978 L 13.125 6.967 L 7.956 9.957 L 7.956 9.949 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.686,
      top: 6.666,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.029,
    height: 14.993,
    viewBox: "0 0 13.029 14.993",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.484,
      top: 0.502,
      width: 13.029,
      height: 14.993,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.843 0.013 C 7.661 0 8.474 0.007 9.286 0 C 9.313 1.015 9.725 1.93 10.38 2.607 L 10.379 2.606 C 11.085 3.241 12.003 3.653 13.015 3.723 L 13.029 3.724 L 13.029 6.242 C 12.073 6.218 11.174 5.998 10.363 5.619 L 10.404 5.635 C 10.012 5.447 9.681 5.254 9.366 5.038 L 9.392 5.055 C 9.386 6.879 9.398 8.704 9.379 10.522 C 9.328 11.448 9.02 12.293 8.526 12.998 L 8.536 12.983 C 7.71 14.166 6.372 14.943 4.85 14.989 L 4.843 14.989 C 4.782 14.992 4.709 14.993 4.636 14.993 C 3.771 14.993 2.963 14.752 2.274 14.333 L 2.294 14.345 C 1.04 13.59 0.175 12.3 0.015 10.798 L 0.013 10.778 C 0 10.465 -0.006 10.153 0.007 9.847 C 0.252 7.457 2.254 5.609 4.687 5.609 C 4.961 5.609 5.229 5.632 5.489 5.677 L 5.461 5.673 C 5.474 6.597 5.436 7.522 5.436 8.446 C 5.225 8.37 4.981 8.326 4.726 8.326 C 3.792 8.326 2.998 8.923 2.704 9.756 L 2.699 9.771 C 2.633 9.984 2.594 10.23 2.594 10.484 C 2.594 10.587 2.601 10.689 2.613 10.789 L 2.612 10.777 C 2.778 11.8 3.655 12.572 4.712 12.572 C 4.743 12.572 4.773 12.571 4.803 12.57 L 4.798 12.57 C 5.53 12.548 6.165 12.155 6.524 11.573 L 6.529 11.564 C 6.662 11.378 6.754 11.153 6.784 10.908 L 6.785 10.901 C 6.847 9.783 6.822 8.671 6.828 7.552 C 6.834 5.035 6.822 2.523 6.841 0.011 L 6.843 0.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 519,
      top: -11.5,
      width: 697,
      height: 208
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Solutions")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Management Suite"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "VPOS Touch"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Accessories"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Nayax Capital"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Company Website"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 207,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Support")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FAQs"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shipping"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "How it works "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Resources"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 412,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "About")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "About Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Costumer Stories"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Affiliate")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "var(--divider-subdued)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Nayax \xA9 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--icon-inverted-default) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Anti-Money Laundering and KYC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Code of Ethics")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: 8.545417785644531,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.057,
      top: 4.767,
      width: 21.522,
      height: 6.593,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.829,
    height: 6.387,
    viewBox: "0 0 2.829 6.387",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.602,
      top: 0.131,
      width: 2.829,
      height: 6.387,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.387 L 1.089 0 L 2.829 0 L 1.74 6.387 L 0 6.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.224,
    height: 6.593,
    viewBox: "0 0 5.224 6.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.408,
      top: 0,
      width: 5.224,
      height: 6.593,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.224 0.268 C 4.879 0.139 4.339 0 3.664 0 C 1.943 0 0.732 0.866 0.721 2.108 C 0.712 3.026 1.586 3.538 2.247 3.843 C 2.924 4.156 3.152 4.356 3.149 4.636 C 3.145 5.064 2.608 5.259 2.107 5.259 C 1.411 5.259 1.04 5.162 0.469 4.924 L 0.244 4.822 L 0 6.252 C 0.407 6.431 1.159 6.585 1.939 6.593 C 3.769 6.593 4.957 5.737 4.971 4.411 C 4.978 3.684 4.514 3.131 3.509 2.675 C 2.901 2.38 2.528 2.183 2.532 1.884 C 2.532 1.618 2.847 1.334 3.529 1.334 C 4.098 1.325 4.511 1.45 4.832 1.579 L 4.988 1.653 L 5.224 0.268 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.252,
    height: 6.383,
    viewBox: "0 0 6.252 6.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.27,
      top: 0.131,
      width: 6.252,
      height: 6.383,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.843 0 L 3.497 0 C 3.081 0 2.769 0.114 2.586 0.53 L 0 6.383 L 1.828 6.383 C 1.828 6.383 2.127 5.596 2.195 5.423 C 2.395 5.423 4.17 5.426 4.424 5.426 C 4.476 5.65 4.636 6.383 4.636 6.383 L 6.252 6.383 L 4.843 0 Z M 2.708 4.124 C 2.852 3.756 3.402 2.339 3.402 2.339 C 3.391 2.356 3.545 1.969 3.633 1.729 L 3.75 2.28 C 3.75 2.28 4.084 3.805 4.153 4.124 L 2.708 4.124 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.141,
    height: 6.377,
    viewBox: "0 0 6.141 6.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.827,
      top: 0.131,
      width: 6.141,
      height: 6.377,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.297 0 L 2.593 4.356 L 2.411 3.471 C 2.094 2.45 1.105 1.345 0 0.791 L 1.559 6.377 L 3.401 6.375 L 6.141 0 L 4.297 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.229,
    height: 3.474,
    viewBox: "0 0 4.229 3.474",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.131,
      width: 4.229,
      height: 3.474,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.83 0 L 0.022 0 L 0 0.133 C 2.184 0.662 3.629 1.939 4.229 3.474 L 3.619 0.539 C 3.513 0.135 3.208 0.014 2.83 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 25.637,
    height: 17.804,
    viewBox: "0 0 25.637 17.804",
    fill: "none",
    style: {
      position: "relative",
      width: 25.637,
      height: 17.804,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.494 15.724 C 21.494 16.027 21.289 16.245 20.995 16.245 C 20.692 16.245 20.497 16.014 20.497 15.724 C 20.497 15.435 20.692 15.204 20.995 15.204 C 21.289 15.204 21.494 15.435 21.494 15.724 Z M 7.66 15.204 C 7.344 15.204 7.162 15.435 7.162 15.724 C 7.162 16.014 7.345 16.245 7.66 16.245 C 7.95 16.245 8.145 16.027 8.145 15.724 C 8.14 15.435 7.95 15.204 7.66 15.204 Z M 12.89 15.191 C 12.65 15.191 12.502 15.346 12.467 15.578 L 13.317 15.578 C 13.277 15.324 13.122 15.191 12.89 15.191 Z M 17.688 15.204 C 17.385 15.204 17.204 15.435 17.204 15.724 C 17.204 16.014 17.386 16.245 17.688 16.245 C 17.991 16.245 18.187 16.027 18.187 15.724 C 18.187 15.435 17.99 15.204 17.688 15.204 Z M 22.401 16.365 C 22.401 16.379 22.415 16.388 22.415 16.414 C 22.415 16.428 22.401 16.437 22.401 16.463 C 22.388 16.477 22.388 16.485 22.379 16.498 C 22.365 16.512 22.356 16.521 22.33 16.521 C 22.316 16.534 22.308 16.534 22.281 16.534 C 22.267 16.534 22.259 16.534 22.232 16.521 C 22.219 16.521 22.21 16.507 22.197 16.498 C 22.183 16.485 22.175 16.476 22.175 16.463 C 22.161 16.441 22.161 16.428 22.161 16.414 C 22.161 16.392 22.161 16.379 22.175 16.365 C 22.175 16.343 22.188 16.33 22.197 16.316 C 22.211 16.303 22.219 16.303 22.232 16.294 C 22.255 16.28 22.267 16.28 22.281 16.28 C 22.304 16.28 22.316 16.28 22.33 16.294 C 22.352 16.307 22.365 16.307 22.379 16.316 C 22.392 16.326 22.388 16.343 22.401 16.365 Z M 22.304 16.428 C 22.326 16.428 22.326 16.414 22.339 16.414 C 22.352 16.401 22.352 16.392 22.352 16.379 C 22.352 16.366 22.352 16.356 22.339 16.344 C 22.326 16.344 22.316 16.33 22.29 16.33 L 22.219 16.33 L 22.219 16.485 L 22.254 16.485 L 22.254 16.423 L 22.267 16.423 L 22.316 16.485 L 22.352 16.485 L 22.304 16.428 Z M 25.637 2.137 L 25.637 15.667 C 25.637 16.846 24.681 17.804 23.5 17.804 L 2.137 17.804 C 0.957 17.804 0 16.847 0 15.667 L 0 2.137 C 0 0.957 0.957 0 2.137 0 L 23.5 0 C 24.68 0 25.637 0.957 25.637 2.137 Z M 2.85 7.281 C 2.85 10.686 5.614 13.445 9.014 13.445 C 10.224 13.445 11.412 13.08 12.418 12.417 C 9.174 9.778 9.196 4.798 12.418 2.158 C 11.412 1.491 10.224 1.13 9.014 1.13 C 5.614 1.126 2.85 3.889 2.85 7.281 Z M 12.819 12.124 C 15.957 9.676 15.943 4.905 12.819 2.444 C 9.695 4.905 9.681 9.681 12.819 12.124 Z M 6.485 15.52 C 6.485 15.133 6.231 14.879 5.831 14.866 C 5.626 14.866 5.408 14.928 5.261 15.155 C 5.154 14.972 4.972 14.866 4.718 14.866 C 4.549 14.866 4.38 14.928 4.246 15.106 L 4.246 14.91 L 3.881 14.91 L 3.881 16.544 L 4.246 16.544 C 4.246 15.703 4.135 15.2 4.647 15.2 C 5.101 15.2 5.012 15.654 5.012 16.544 L 5.364 16.544 C 5.364 15.729 5.252 15.2 5.764 15.2 C 6.218 15.2 6.129 15.645 6.129 16.544 L 6.494 16.544 L 6.494 15.52 L 6.485 15.52 Z M 8.484 14.91 L 8.132 14.91 L 8.132 15.106 C 8.012 14.959 7.843 14.866 7.612 14.866 C 7.153 14.866 6.802 15.231 6.802 15.724 C 6.802 16.223 7.153 16.583 7.612 16.583 C 7.843 16.583 8.012 16.498 8.132 16.343 L 8.132 16.548 L 8.484 16.548 L 8.484 14.91 Z M 10.287 16.05 C 10.287 15.382 9.268 15.684 9.268 15.373 C 9.268 15.119 9.797 15.16 10.091 15.324 L 10.238 15.035 C 9.819 14.763 8.893 14.768 8.893 15.4 C 8.893 16.036 9.912 15.769 9.912 16.067 C 9.912 16.348 9.312 16.325 8.991 16.103 L 8.836 16.383 C 9.334 16.721 10.287 16.65 10.287 16.05 Z M 11.862 16.463 L 11.765 16.16 C 11.596 16.253 11.221 16.356 11.221 15.978 L 11.221 15.239 L 11.805 15.239 L 11.805 14.91 L 11.221 14.91 L 11.221 14.411 L 10.856 14.411 L 10.856 14.91 L 10.518 14.91 L 10.518 15.235 L 10.856 15.235 L 10.856 15.978 C 10.856 16.762 11.626 16.619 11.862 16.463 Z M 12.454 15.867 L 13.678 15.867 C 13.678 15.146 13.348 14.861 12.903 14.861 C 12.431 14.861 12.093 15.212 12.093 15.72 C 12.093 16.632 13.099 16.783 13.598 16.352 L 13.429 16.085 C 13.082 16.37 12.556 16.343 12.454 15.867 Z M 15.085 14.91 C 14.88 14.821 14.569 14.83 14.408 15.106 L 14.408 14.91 L 14.043 14.91 L 14.043 16.544 L 14.408 16.544 L 14.408 15.623 C 14.408 15.106 14.831 15.173 14.978 15.248 L 15.085 14.91 Z M 15.556 15.724 C 15.556 15.216 16.073 15.052 16.478 15.35 L 16.647 15.061 C 16.13 14.656 15.191 14.878 15.191 15.728 C 15.191 16.61 16.188 16.787 16.647 16.396 L 16.478 16.107 C 16.068 16.396 15.556 16.223 15.556 15.724 Z M 18.525 14.91 L 18.159 14.91 L 18.159 15.106 C 17.79 14.616 16.829 14.893 16.829 15.724 C 16.829 16.579 17.825 16.824 18.159 16.343 L 18.159 16.548 L 18.525 16.548 L 18.525 14.91 Z M 20.024 14.91 C 19.918 14.857 19.535 14.781 19.348 15.106 L 19.348 14.91 L 18.996 14.91 L 18.996 16.544 L 19.348 16.544 L 19.348 15.623 C 19.348 15.133 19.749 15.164 19.918 15.248 L 20.024 14.91 Z M 21.818 14.247 L 21.466 14.247 L 21.466 15.106 C 21.101 14.621 20.136 14.879 20.136 15.724 C 20.136 16.588 21.137 16.819 21.466 16.343 L 21.466 16.548 L 21.818 16.548 L 21.818 14.247 Z M 22.157 10.905 L 22.157 11.11 L 22.192 11.11 L 22.192 10.905 L 22.276 10.905 L 22.276 10.87 L 22.071 10.87 L 22.071 10.905 L 22.157 10.905 Z M 22.45 16.414 C 22.45 16.392 22.45 16.365 22.437 16.343 C 22.424 16.329 22.415 16.308 22.402 16.294 C 22.389 16.28 22.367 16.272 22.353 16.259 C 22.331 16.259 22.304 16.245 22.282 16.245 C 22.268 16.245 22.247 16.259 22.219 16.259 C 22.197 16.272 22.184 16.281 22.171 16.294 C 22.148 16.307 22.135 16.329 22.135 16.343 C 22.122 16.365 22.122 16.392 22.122 16.414 C 22.122 16.428 22.122 16.449 22.135 16.477 C 22.135 16.49 22.149 16.512 22.171 16.526 C 22.183 16.539 22.193 16.548 22.219 16.561 C 22.242 16.574 22.268 16.574 22.282 16.574 C 22.304 16.574 22.331 16.574 22.353 16.561 C 22.367 16.547 22.388 16.538 22.402 16.526 C 22.416 16.513 22.425 16.49 22.437 16.477 C 22.45 16.45 22.45 16.428 22.45 16.414 Z M 22.593 10.865 L 22.53 10.865 L 22.459 11.02 L 22.388 10.865 L 22.325 10.865 L 22.325 11.105 L 22.36 11.105 L 22.36 10.922 L 22.432 11.078 L 22.481 11.078 L 22.543 10.922 L 22.543 11.105 L 22.592 11.105 L 22.593 10.865 Z M 22.788 7.281 C 22.788 3.889 20.024 1.126 16.624 1.126 C 15.414 1.126 14.226 1.491 13.219 2.154 C 16.429 4.794 16.478 9.787 13.219 12.413 C 14.226 13.081 15.423 13.441 16.624 13.441 C 20.024 13.446 22.788 10.686 22.788 7.281 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.957,
      top: 3.753,
      width: 23.72,
      height: 8.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.620,
    height: 3.877,
    viewBox: "0 0 22.620 3.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.62,
      height: 3.877,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.875 L 1.139 3.875 L 1.396 3.258 L 1.971 3.258 L 2.228 3.875 L 4.469 3.875 L 4.469 3.403 L 4.67 3.877 L 5.833 3.877 L 6.033 3.396 L 6.033 3.875 L 11.605 3.875 L 11.602 2.862 L 11.71 2.862 C 11.785 2.864 11.807 2.871 11.807 2.995 L 11.807 3.875 L 14.689 3.875 L 14.689 3.639 C 14.921 3.763 15.283 3.875 15.758 3.875 L 16.97 3.875 L 17.23 3.258 L 17.805 3.258 L 18.059 3.875 L 20.395 3.875 L 20.395 3.288 L 20.748 3.875 L 22.62 3.875 L 22.62 0 L 20.768 0 L 20.768 0.458 L 20.508 0 L 18.607 0 L 18.607 0.458 L 18.369 0 L 15.801 0 C 15.372 0 14.994 0.06 14.689 0.226 L 14.689 0 L 12.917 0 L 12.917 0.226 C 12.722 0.055 12.458 0 12.164 0 L 5.69 0 L 5.256 1.001 L 4.81 0 L 2.771 0 L 2.771 0.458 L 2.547 0 L 0.808 0 L 0 1.842 L 0 3.875 L 0 3.875 Z M 7.192 3.316 L 6.508 3.316 L 6.506 1.14 L 5.539 3.316 L 4.953 3.316 L 3.984 1.138 L 3.984 3.316 L 2.628 3.316 L 2.371 2.696 L 0.983 2.696 L 0.724 3.316 L 0 3.316 L 1.194 0.538 L 2.185 0.538 L 3.319 3.168 L 3.319 0.538 L 4.407 0.538 L 5.28 2.422 L 6.082 0.538 L 7.192 0.538 L 7.192 3.316 L 7.192 3.316 Z M 2.144 2.119 L 1.687 1.012 L 1.233 2.119 L 2.144 2.119 Z M 9.913 3.316 L 7.685 3.316 L 7.685 0.538 L 9.913 0.538 L 9.913 1.116 L 8.352 1.116 L 8.352 1.617 L 9.875 1.617 L 9.875 2.186 L 8.352 2.186 L 8.352 2.741 L 9.913 2.741 L 9.913 3.316 Z M 13.052 1.286 C 13.052 1.729 12.755 1.958 12.582 2.026 C 12.728 2.082 12.852 2.179 12.912 2.26 C 13.006 2.398 13.022 2.522 13.022 2.77 L 13.022 3.316 L 12.35 3.316 L 12.347 2.965 C 12.347 2.798 12.363 2.558 12.242 2.424 C 12.144 2.326 11.996 2.305 11.756 2.305 L 11.04 2.305 L 11.04 3.316 L 10.373 3.316 L 10.373 0.538 L 11.907 0.538 C 12.248 0.538 12.499 0.547 12.714 0.671 C 12.925 0.795 13.052 0.976 13.052 1.286 Z M 12.209 1.698 C 12.117 1.754 12.009 1.756 11.879 1.756 L 11.069 1.756 L 11.069 1.139 L 11.89 1.139 C 12.006 1.139 12.127 1.144 12.206 1.189 C 12.293 1.229 12.346 1.315 12.346 1.434 C 12.346 1.556 12.295 1.653 12.209 1.698 Z M 14.121 3.316 L 13.441 3.316 L 13.441 0.538 L 14.121 0.538 L 14.121 3.316 Z M 22.02 3.316 L 21.075 3.316 L 19.811 1.231 L 19.811 3.316 L 18.453 3.316 L 18.193 2.696 L 16.808 2.696 L 16.556 3.316 L 15.776 3.316 C 15.452 3.316 15.041 3.244 14.809 3.008 C 14.575 2.773 14.453 2.453 14.453 1.948 C 14.453 1.536 14.526 1.159 14.812 0.862 C 15.028 0.64 15.365 0.538 15.825 0.538 L 16.471 0.538 L 16.471 1.133 L 15.838 1.133 C 15.595 1.133 15.458 1.169 15.325 1.297 C 15.212 1.414 15.134 1.636 15.134 1.927 C 15.134 2.224 15.193 2.439 15.317 2.579 C 15.42 2.689 15.606 2.722 15.782 2.722 L 16.081 2.722 L 17.021 0.538 L 18.02 0.538 L 19.149 3.165 L 19.149 0.538 L 20.165 0.538 L 21.337 2.472 L 21.337 0.538 L 22.02 0.538 L 22.02 3.316 Z M 17.966 2.119 L 17.505 1.012 L 17.046 2.119 L 17.966 2.119 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.008,
    height: 3.879,
    viewBox: "0 0 19.008 3.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.712,
      top: 4.775,
      width: 19.008,
      height: 3.879,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.007 2.976 C 18.845 3.212 18.529 3.331 18.102 3.331 L 16.814 3.331 L 16.814 2.736 L 18.097 2.736 C 18.224 2.736 18.313 2.719 18.367 2.667 C 18.413 2.624 18.445 2.561 18.445 2.486 C 18.445 2.405 18.413 2.34 18.364 2.302 C 18.316 2.259 18.245 2.24 18.129 2.24 C 17.503 2.219 16.722 2.259 16.722 1.38 C 16.722 0.977 16.979 0.553 17.678 0.553 L 19.007 0.553 L 19.007 0 L 17.773 0 C 17.4 0 17.13 0.089 16.938 0.227 L 16.938 0 L 15.113 0 C 14.821 0 14.478 0.072 14.316 0.227 L 14.316 0 L 11.056 0 L 11.056 0.227 C 10.797 0.041 10.359 0 10.157 0 L 8.007 0 L 8.007 0.227 C 7.802 0.029 7.345 0 7.067 0 L 4.661 0 L 4.11 0.593 L 3.595 0 L 0 0 L 0 3.877 L 3.527 3.877 L 4.094 3.274 L 4.629 3.877 L 6.803 3.879 L 6.803 2.967 L 7.017 2.967 C 7.305 2.972 7.645 2.96 7.945 2.831 L 7.945 3.877 L 9.739 3.877 L 9.739 2.867 L 9.825 2.867 C 9.935 2.867 9.946 2.871 9.946 2.981 L 9.946 3.877 L 15.394 3.877 C 15.739 3.877 16.101 3.789 16.301 3.629 L 16.301 3.877 L 18.029 3.877 C 18.388 3.877 18.74 3.827 19.007 3.698 L 19.007 2.976 Z M 8.206 1.485 C 8.206 2.257 7.628 2.416 7.045 2.416 L 6.213 2.416 L 6.213 3.348 L 4.917 3.348 L 4.096 2.428 L 3.242 3.348 L 0.601 3.348 L 0.601 0.569 L 3.283 0.569 L 4.103 1.48 L 4.951 0.569 L 7.082 0.569 C 7.611 0.569 8.206 0.715 8.206 1.485 Z M 2.905 2.763 L 1.265 2.763 L 1.265 2.211 L 2.729 2.211 L 2.729 1.644 L 1.265 1.644 L 1.265 1.139 L 2.937 1.139 L 3.666 1.948 L 2.905 2.763 Z M 5.546 3.082 L 4.522 1.95 L 5.546 0.854 L 5.546 3.082 Z M 7.06 1.846 L 6.199 1.846 L 6.199 1.139 L 7.068 1.139 C 7.309 1.139 7.476 1.236 7.476 1.479 C 7.476 1.72 7.317 1.846 7.06 1.846 Z M 11.575 0.569 L 13.8 0.569 L 13.8 1.144 L 12.239 1.144 L 12.239 1.649 L 13.762 1.649 L 13.762 2.216 L 12.239 2.216 L 12.239 2.769 L 13.8 2.771 L 13.8 3.348 L 11.575 3.348 L 11.575 0.569 Z M 10.719 2.057 C 10.868 2.111 10.989 2.209 11.046 2.29 C 11.14 2.426 11.154 2.552 11.156 2.797 L 11.156 3.348 L 10.487 3.348 L 10.487 3 C 10.487 2.833 10.503 2.586 10.379 2.456 C 10.282 2.357 10.133 2.333 9.89 2.333 L 9.177 2.333 L 9.177 3.348 L 8.507 3.348 L 8.507 0.569 L 10.047 0.569 C 10.384 0.569 10.63 0.584 10.849 0.7 C 11.06 0.827 11.192 1 11.192 1.317 C 11.192 1.761 10.895 1.987 10.719 2.057 Z M 10.342 1.705 C 10.253 1.758 10.143 1.763 10.013 1.763 L 9.203 1.763 L 9.203 1.139 L 10.024 1.139 C 10.143 1.139 10.262 1.141 10.342 1.189 C 10.429 1.234 10.48 1.32 10.48 1.439 C 10.48 1.558 10.429 1.653 10.342 1.705 Z M 16.362 1.882 C 16.492 2.016 16.562 2.185 16.562 2.471 C 16.562 3.069 16.186 3.348 15.514 3.348 L 14.215 3.348 L 14.215 2.752 L 15.509 2.752 C 15.635 2.752 15.725 2.735 15.781 2.683 C 15.827 2.64 15.86 2.578 15.86 2.502 C 15.86 2.421 15.824 2.357 15.779 2.318 C 15.728 2.276 15.657 2.257 15.541 2.257 C 14.917 2.235 14.137 2.276 14.137 1.397 C 14.137 0.993 14.391 0.569 15.09 0.569 L 16.427 0.569 L 16.427 1.161 L 15.203 1.161 C 15.082 1.161 15.003 1.165 14.936 1.211 C 14.863 1.256 14.836 1.323 14.836 1.411 C 14.836 1.516 14.898 1.587 14.982 1.618 C 15.052 1.642 15.128 1.649 15.242 1.649 L 15.601 1.659 C 15.963 1.668 16.211 1.73 16.362 1.882 Z M 19.008 1.139 L 17.793 1.139 C 17.672 1.139 17.591 1.143 17.523 1.189 C 17.453 1.234 17.426 1.3 17.426 1.389 C 17.426 1.493 17.485 1.565 17.571 1.596 C 17.642 1.62 17.717 1.627 17.828 1.627 L 18.19 1.637 C 18.554 1.646 18.798 1.708 18.946 1.86 C 18.973 1.882 18.99 1.905 19.008 1.929 L 19.008 1.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e8329a5d46a21c6f-f3d97af6",
    style: {
      position: "relative",
      width: 20.295,
      height: 14.965,
      mixBlendMode: "lighten",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-766c0bac5f158721-d965af24",
    style: {
      position: "relative",
      width: 25.636,
      height: 15.713,
      borderRadius: 2.4233274459838867,
      boxShadow: "inset 0 0 0 1.068px var(--stroke-action-inverted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ff756ba7b5fbe6f3",
    style: {
      position: "relative",
      width: 22.432,
      height: 15.903,
      flexShrink: 0
    }
  }))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 886,
      backgroundColor: "var(--surface-inverted-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 64,
      width: 1216,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 557,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 72,
      lineHeight: "80px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Keep yourself", " ", "updated"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 593,
      height: 209,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--icon-base-default) * 1px)",
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--icon-base-default) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 540,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, props.text1 ?? "Join our VIP mailing list and get exclusive updates and promotions as soon as they are released"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 489,
      height: 109,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 489,
      borderRadius: 10000000,
      boxShadow: "inset 0 0 0 1px var(--stroke-error-inverted)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingRight: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "‘!”."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--action-highlight-default) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0
    }
  }, "Submit"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.983,
    height: 15.001,
    viewBox: "0 0 14.983 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.593,
      top: 3.999,
      width: 14.983,
      height: 15.001,
      color: "var(--icon-base-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.782 0.087 C 9.317 3.028 11.716 5.428 14.656 6.962 C 15.092 7.189 15.092 7.813 14.656 8.04 C 11.716 9.574 9.317 11.974 7.782 14.914 L 7.736 15.001 L 7.243 14.744 L 6.749 14.486 L 6.794 14.399 C 8.13 11.839 10.081 9.663 12.458 8.058 L 0 8.058 L 0 6.943 L 12.458 6.943 C 10.082 5.338 8.13 3.163 6.794 0.603 L 6.749 0.516 L 7.736 0 L 7.782 0.087 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 60,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-error-inverted)"
    }
  }, props.text3 ?? "Email must include an ‘@’ and a domain (e.g. name@email.com). "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: -6,
      backgroundColor: "var(--surface-inverted-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, props.text4 ?? "Email address"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 89,
      width: 465,
      height: 20,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)"
    }
  }, "Your information will be processed in accordance with our Privacy Policy")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 316,
      width: 1216,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 365,
      width: 1216,
      height: 482.4,
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 378.4,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 116,
      height: 46.4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.152,
      top: 9.04,
      width: 116.244,
      height: 32.515,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.103,
    height: 21.891,
    viewBox: "0 0 20.103 21.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.514,
      top: 6.407,
      width: 20.103,
      height: 21.891,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.71 0 C 3.977 0 0 4.901 0 10.946 C 0 16.992 3.816 21.891 10.71 21.891 C 16.626 21.891 20.103 16.496 20.103 10.452 C 20.103 6.347 17.295 0 10.71 0 Z M 10.71 16.653 C 6.851 16.653 5.125 14.098 5.125 10.945 C 5.125 7.792 6.931 5.237 10.71 5.237 C 14.276 5.237 16.295 7.792 16.295 10.945 C 16.295 14.098 14.435 16.653 10.71 16.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.261,
    height: 27.712,
    viewBox: "0 0 24.261 27.712",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.261,
      height: 27.712,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.428 0 L 18.428 17.314 L 5.363 0 L 0 0 L 0 27.712 L 5.831 27.712 L 5.831 10.075 L 16.17 23.566 C 18.912 22.207 21.805 20.979 23.85 20.371 L 24.261 20.249 L 24.261 0 L 18.43 0 L 18.428 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.488,
    height: 5.901,
    viewBox: "0 0 12.488 5.901",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.771,
      top: 21.813,
      width: 12.488,
      height: 5.901,
      color: "var(--action-highlight-focused)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.487 5.901 L 12.487 0 C 9.292 0.952 3.927 3.48 0.537 5.563 C 0.416 5.637 0.296 5.711 0.181 5.785 C 0.119 5.824 0.059 5.862 0 5.901 L 12.488 5.901 L 12.487 5.901 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.977,
    height: 21.306,
    viewBox: "0 0 20.977 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 95.268,
      top: 6.407,
      width: 20.977,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.977 0 L 14.599 0 L 10.735 6.041 L 6.377 0 L 0 0 L 7.547 10.652 L 0.988 21.306 L 7.364 21.306 L 10.735 15.469 L 14.599 21.306 L 20.977 21.306 L 13.924 10.652 L 20.977 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.883,
    height: 26.108,
    viewBox: "0 0 22.883 26.108",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.686,
      top: 6.407,
      width: 22.883,
      height: 26.108,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.888 0 L 11.555 12.772 L 6.135 0 L 0 0 L 8.75 19.49 L 5.986 26.108 L 11.564 26.108 L 22.883 0 L 16.888 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.071,
    height: 21.306,
    viewBox: "0 0 5.071 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.184,
      top: 6.407,
      width: 5.071,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.624 21.306 L 5.071 21.306 L 5.071 0 L 0.624 0 L 0 3.766 L 0 17.414 L 0.624 21.306 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.103,
    height: 21.891,
    viewBox: "0 0 20.103 21.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.703,
      top: 6.407,
      width: 20.103,
      height: 21.891,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.71 0 C 3.977 0 0 4.901 0 10.946 C 0 16.992 3.816 21.891 10.71 21.891 C 16.626 21.891 20.103 16.496 20.103 10.452 C 20.103 6.347 17.295 0 10.71 0 Z M 10.71 16.653 C 6.851 16.653 5.125 14.098 5.125 10.945 C 5.125 7.792 6.931 5.237 10.71 5.237 C 14.276 5.237 16.295 7.792 16.295 10.945 C 16.295 14.098 14.435 16.653 10.71 16.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.072,
    height: 21.306,
    viewBox: "0 0 5.072 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 88.375,
      top: 6.407,
      width: 5.072,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.625 21.306 L 5.072 21.306 L 5.072 0 L 0.625 0 L 0 3.766 L 0 17.414 L 0.625 21.306 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 70.4,
      width: 1216,
      height: 308
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 389,
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We are a leading global provider of EMV certified cashless payment solutions, telemetry system, and a management & monitoring business suite for the unattended machine industry."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 37,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "2px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Location, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "US"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      transform: "matrix(0,1,-1,0,38,0)",
      transformOrigin: "0 0",
      color: "var(--icon-inverted-default)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.ChevronDown, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Executive Plaza 1, 11350\nMccormick Road, Hunt Valley,\nMaryland 21031"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.Phone, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "(410) 666-3800")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.938,
      top: 6.961,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.562644958496094,
      height: 16.267230987548828,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.561,
    height: 16.262,
    viewBox: "0 0 8.561 16.262",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.817 4.27 L 5.817 6.072 L 8.561 6.072 L 8.119 9.079 L 5.817 9.079 L 5.817 16.175 C 5.351 16.233 4.881 16.262 4.411 16.262 C 3.814 16.263 3.218 16.217 2.628 16.126 L 2.628 9.084 L 0 9.084 L 0.052 6.072 L 2.628 6.072 L 2.628 3.477 C 2.628 1.549 4.363 -0.724 8.561 0.221 L 8.561 2.746 L 7.287 2.769 C 7.089 2.762 6.893 2.797 6.709 2.871 C 6.526 2.944 6.36 3.055 6.222 3.196 C 6.084 3.337 5.977 3.506 5.907 3.69 C 5.837 3.875 5.807 4.072 5.817 4.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 16.046,
    height: 16.405,
    viewBox: "0 0 16.046 16.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.789,
      top: 6.781,
      width: 16.046,
      height: 16.405,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.546 6.948 L 15.519 0 L 14.105 0 L 8.919 6.032 L 4.778 0 L 0 0 L 6.271 9.118 L 0 16.405 L 1.414 16.405 L 6.888 10.034 L 11.268 16.405 L 16.046 16.405 L 9.546 6.948 Z M 7.605 9.208 L 6.968 8.302 L 1.921 1.065 L 4.091 1.065 L 8.172 6.898 L 8.81 7.804 L 14.105 15.379 L 11.935 15.379 L 7.605 9.208 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.332,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.961,
      top: 6.961,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416336059570312,
      height: 13.302857398986816,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.404,
      height: 13.305,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.237,
    height: 3.237,
    viewBox: "0 0 3.237 3.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.237,
      height: 3.237,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.237 1.619 C 3.237 1.939 3.142 2.252 2.964 2.518 C 2.786 2.784 2.534 2.991 2.238 3.114 C 1.942 3.236 1.617 3.268 1.303 3.206 C 0.989 3.144 0.7 2.989 0.474 2.763 C 0.248 2.537 0.094 2.248 0.031 1.934 C -0.031 1.62 0.001 1.295 0.123 0.999 C 0.246 0.703 0.453 0.451 0.719 0.273 C 0.986 0.095 1.298 0 1.619 0 C 2.048 0 2.46 0.171 2.763 0.474 C 3.067 0.778 3.237 1.189 3.237 1.619 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.722,
    height: 8.923,
    viewBox: "0 0 2.722 8.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.258,
      top: 4.375,
      width: 2.722,
      height: 8.923,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.722 0 L 0 0 L 0 8.923 L 2.722 8.923 L 2.722 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.740,
    height: 9.180,
    viewBox: "0 0 8.740 9.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.664,
      top: 4.125,
      width: 8.74,
      height: 9.18,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.695 1.49 L 2.695 0.253 L 0 0.253 L 0 9.176 L 2.695 9.176 L 2.695 5.65 C 2.695 4.123 2.899 3.393 3.267 2.992 L 3.289 2.97 C 3.421 2.82 3.582 2.699 3.762 2.613 C 3.942 2.527 4.137 2.478 4.336 2.469 C 4.536 2.46 4.735 2.49 4.922 2.559 C 5.109 2.628 5.28 2.734 5.426 2.87 C 5.734 3.259 5.888 3.749 5.858 4.245 L 5.858 9.18 L 8.74 9.18 L 8.74 4.476 C 8.74 1.091 7.479 0.164 5.845 0.039 L 5.703 0.028 C 5.113 -0.053 4.512 0.043 3.977 0.303 C 3.441 0.563 2.995 0.976 2.695 1.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.008,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.961,
      top: 7.969,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.332720756530762,
      height: 13.33371639251709,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.894,
    height: 6.894,
    viewBox: "0 0 6.894 6.894",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.219,
      top: 3.219,
      width: 6.894,
      height: 6.894,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.448 1.227 C 3.887 1.227 4.316 1.358 4.681 1.601 C 5.046 1.845 5.331 2.192 5.499 2.598 C 5.667 3.003 5.711 3.45 5.625 3.88 C 5.54 4.311 5.328 4.706 5.018 5.017 C 4.707 5.327 4.312 5.539 3.881 5.624 C 3.451 5.71 3.004 5.666 2.599 5.498 C 2.193 5.33 1.846 5.045 1.602 4.68 C 1.359 4.315 1.228 3.886 1.228 3.447 C 1.228 2.858 1.462 2.294 1.879 1.878 C 2.295 1.461 2.859 1.227 3.448 1.227 Z M 3.448 0 C 2.766 0 2.1 0.202 1.533 0.581 C 0.966 0.959 0.524 1.498 0.263 2.128 C 0.002 2.757 -0.067 3.451 0.066 4.119 C 0.199 4.788 0.527 5.403 1.01 5.885 C 1.492 6.367 2.106 6.695 2.775 6.828 C 3.444 6.961 4.137 6.893 4.767 6.632 C 5.397 6.371 5.935 5.929 6.314 5.362 C 6.692 4.795 6.895 4.128 6.894 3.446 C 6.893 2.533 6.53 1.657 5.884 1.011 C 5.238 0.364 4.362 0.001 3.448 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.333,
    height: 13.329,
    viewBox: "0 0 13.333 13.329",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.605 1.227 C 9.933 1.227 10.259 1.292 10.562 1.418 C 10.865 1.544 11.141 1.728 11.373 1.96 C 11.606 2.192 11.79 2.468 11.915 2.772 C 12.041 3.075 12.105 3.4 12.105 3.729 L 12.105 9.602 C 12.105 9.93 12.041 10.256 11.915 10.559 C 11.79 10.863 11.606 11.138 11.373 11.371 C 11.141 11.603 10.865 11.787 10.562 11.913 C 10.259 12.039 9.933 12.103 9.605 12.103 L 3.732 12.103 C 3.403 12.104 3.078 12.04 2.774 11.914 C 2.471 11.789 2.195 11.605 1.962 11.373 C 1.73 11.142 1.545 10.866 1.419 10.563 C 1.293 10.259 1.228 9.934 1.227 9.606 L 1.227 3.733 C 1.227 3.404 1.291 3.078 1.416 2.774 C 1.542 2.47 1.726 2.194 1.958 1.961 C 2.19 1.729 2.466 1.544 2.77 1.418 C 3.074 1.292 3.399 1.227 3.728 1.227 L 9.605 1.227 Z M 9.605 0 L 3.732 0 C 2.743 0 1.794 0.393 1.094 1.092 C 0.395 1.791 0.001 2.739 0 3.728 L 0 9.601 C 0.001 10.589 0.394 11.537 1.093 12.236 C 1.792 12.935 2.739 13.328 3.728 13.329 L 9.601 13.329 C 10.589 13.329 11.537 12.937 12.237 12.239 C 12.936 11.541 13.33 10.594 13.333 9.606 L 13.333 3.733 C 13.333 2.744 12.94 1.795 12.241 1.095 C 11.542 0.395 10.594 0.001 9.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.627,
    height: 1.627,
    viewBox: "0 0 1.627 1.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.469,
      top: 2.226,
      width: 1.627,
      height: 1.627,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.627 0.813 C 1.627 0.974 1.579 1.131 1.489 1.265 C 1.4 1.399 1.273 1.503 1.124 1.565 C 0.976 1.626 0.812 1.642 0.655 1.611 C 0.497 1.58 0.352 1.502 0.238 1.388 C 0.124 1.275 0.047 1.13 0.016 0.972 C -0.016 0.814 0 0.651 0.062 0.502 C 0.123 0.353 0.228 0.226 0.361 0.137 C 0.495 0.048 0.652 0 0.813 0 C 0.92 0 1.026 0.021 1.124 0.062 C 1.223 0.103 1.313 0.163 1.388 0.238 C 1.464 0.314 1.524 0.403 1.565 0.502 C 1.605 0.601 1.627 0.706 1.627 0.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.898,
    height: 13.919,
    viewBox: "0 0 19.898 13.919",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.984,
      top: 7.969,
      width: 19.898,
      height: 13.919,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.486 2.172 C 19.26 1.316 18.582 0.638 17.726 0.413 C 16.177 0 9.949 0 9.949 0 C 9.949 0 3.721 0 2.172 0.413 C 1.316 0.638 0.638 1.316 0.413 2.172 C 0 3.721 0 6.96 0 6.96 C 0 6.96 0 10.198 0.413 11.747 C 0.638 12.604 1.316 13.281 2.172 13.507 C 3.721 13.919 9.949 13.919 9.949 13.919 C 9.949 13.919 16.177 13.919 17.726 13.507 C 18.582 13.281 19.26 12.604 19.486 11.747 C 19.898 10.198 19.898 6.96 19.898 6.96 C 19.898 6.96 19.898 3.721 19.486 2.172 Z M 7.956 9.949 L 7.956 3.978 L 13.125 6.967 L 7.956 9.957 L 7.956 9.949 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.686,
      top: 6.666,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.029,
    height: 14.993,
    viewBox: "0 0 13.029 14.993",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.484,
      top: 0.502,
      width: 13.029,
      height: 14.993,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.843 0.013 C 7.661 0 8.474 0.007 9.286 0 C 9.313 1.015 9.725 1.93 10.38 2.607 L 10.379 2.606 C 11.085 3.241 12.003 3.653 13.015 3.723 L 13.029 3.724 L 13.029 6.242 C 12.073 6.218 11.174 5.998 10.363 5.619 L 10.404 5.635 C 10.012 5.447 9.681 5.254 9.366 5.038 L 9.392 5.055 C 9.386 6.879 9.398 8.704 9.379 10.522 C 9.328 11.448 9.02 12.293 8.526 12.998 L 8.536 12.983 C 7.71 14.166 6.372 14.943 4.85 14.989 L 4.843 14.989 C 4.782 14.992 4.709 14.993 4.636 14.993 C 3.771 14.993 2.963 14.752 2.274 14.333 L 2.294 14.345 C 1.04 13.59 0.175 12.3 0.015 10.798 L 0.013 10.778 C 0 10.465 -0.006 10.153 0.007 9.847 C 0.252 7.457 2.254 5.609 4.687 5.609 C 4.961 5.609 5.229 5.632 5.489 5.677 L 5.461 5.673 C 5.474 6.597 5.436 7.522 5.436 8.446 C 5.225 8.37 4.981 8.326 4.726 8.326 C 3.792 8.326 2.998 8.923 2.704 9.756 L 2.699 9.771 C 2.633 9.984 2.594 10.23 2.594 10.484 C 2.594 10.587 2.601 10.689 2.613 10.789 L 2.612 10.777 C 2.778 11.8 3.655 12.572 4.712 12.572 C 4.743 12.572 4.773 12.571 4.803 12.57 L 4.798 12.57 C 5.53 12.548 6.165 12.155 6.524 11.573 L 6.529 11.564 C 6.662 11.378 6.754 11.153 6.784 10.908 L 6.785 10.901 C 6.847 9.783 6.822 8.671 6.828 7.552 C 6.834 5.035 6.822 2.523 6.841 0.011 L 6.843 0.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 519,
      top: -11.5,
      width: 697,
      height: 208
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Solutions")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Management Suite"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "VPOS Touch"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Accessories"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Nayax Capital"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Company Website"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 207,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Support")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FAQs"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shipping"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "How it works "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Resources"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 412,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "About")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "About Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Costumer Stories"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Affiliate")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "var(--divider-subdued)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Nayax \xA9 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--icon-inverted-default) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Anti-Money Laundering and KYC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Code of Ethics")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: 8.545417785644531,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.057,
      top: 4.767,
      width: 21.522,
      height: 6.593,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.829,
    height: 6.387,
    viewBox: "0 0 2.829 6.387",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.602,
      top: 0.131,
      width: 2.829,
      height: 6.387,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.387 L 1.089 0 L 2.829 0 L 1.74 6.387 L 0 6.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.224,
    height: 6.593,
    viewBox: "0 0 5.224 6.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.408,
      top: 0,
      width: 5.224,
      height: 6.593,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.224 0.268 C 4.879 0.139 4.339 0 3.664 0 C 1.943 0 0.732 0.866 0.721 2.108 C 0.712 3.026 1.586 3.538 2.247 3.843 C 2.924 4.156 3.152 4.356 3.149 4.636 C 3.145 5.064 2.608 5.259 2.107 5.259 C 1.411 5.259 1.04 5.162 0.469 4.924 L 0.244 4.822 L 0 6.252 C 0.407 6.431 1.159 6.585 1.939 6.593 C 3.769 6.593 4.957 5.737 4.971 4.411 C 4.978 3.684 4.514 3.131 3.509 2.675 C 2.901 2.38 2.528 2.183 2.532 1.884 C 2.532 1.618 2.847 1.334 3.529 1.334 C 4.098 1.325 4.511 1.45 4.832 1.579 L 4.988 1.653 L 5.224 0.268 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.252,
    height: 6.383,
    viewBox: "0 0 6.252 6.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.27,
      top: 0.131,
      width: 6.252,
      height: 6.383,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.843 0 L 3.497 0 C 3.081 0 2.769 0.114 2.586 0.53 L 0 6.383 L 1.828 6.383 C 1.828 6.383 2.127 5.596 2.195 5.423 C 2.395 5.423 4.17 5.426 4.424 5.426 C 4.476 5.65 4.636 6.383 4.636 6.383 L 6.252 6.383 L 4.843 0 Z M 2.708 4.124 C 2.852 3.756 3.402 2.339 3.402 2.339 C 3.391 2.356 3.545 1.969 3.633 1.729 L 3.75 2.28 C 3.75 2.28 4.084 3.805 4.153 4.124 L 2.708 4.124 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.141,
    height: 6.377,
    viewBox: "0 0 6.141 6.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.827,
      top: 0.131,
      width: 6.141,
      height: 6.377,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.297 0 L 2.593 4.356 L 2.411 3.471 C 2.094 2.45 1.105 1.345 0 0.791 L 1.559 6.377 L 3.401 6.375 L 6.141 0 L 4.297 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.229,
    height: 3.474,
    viewBox: "0 0 4.229 3.474",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.131,
      width: 4.229,
      height: 3.474,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.83 0 L 0.022 0 L 0 0.133 C 2.184 0.662 3.629 1.939 4.229 3.474 L 3.619 0.539 C 3.513 0.135 3.208 0.014 2.83 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 25.637,
    height: 17.804,
    viewBox: "0 0 25.637 17.804",
    fill: "none",
    style: {
      position: "relative",
      width: 25.637,
      height: 17.804,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.494 15.724 C 21.494 16.027 21.289 16.245 20.995 16.245 C 20.692 16.245 20.497 16.014 20.497 15.724 C 20.497 15.435 20.692 15.204 20.995 15.204 C 21.289 15.204 21.494 15.435 21.494 15.724 Z M 7.66 15.204 C 7.344 15.204 7.162 15.435 7.162 15.724 C 7.162 16.014 7.345 16.245 7.66 16.245 C 7.95 16.245 8.145 16.027 8.145 15.724 C 8.14 15.435 7.95 15.204 7.66 15.204 Z M 12.89 15.191 C 12.65 15.191 12.502 15.346 12.467 15.578 L 13.317 15.578 C 13.277 15.324 13.122 15.191 12.89 15.191 Z M 17.688 15.204 C 17.385 15.204 17.204 15.435 17.204 15.724 C 17.204 16.014 17.386 16.245 17.688 16.245 C 17.991 16.245 18.187 16.027 18.187 15.724 C 18.187 15.435 17.99 15.204 17.688 15.204 Z M 22.401 16.365 C 22.401 16.379 22.415 16.388 22.415 16.414 C 22.415 16.428 22.401 16.437 22.401 16.463 C 22.388 16.477 22.388 16.485 22.379 16.498 C 22.365 16.512 22.356 16.521 22.33 16.521 C 22.316 16.534 22.308 16.534 22.281 16.534 C 22.267 16.534 22.259 16.534 22.232 16.521 C 22.219 16.521 22.21 16.507 22.197 16.498 C 22.183 16.485 22.175 16.476 22.175 16.463 C 22.161 16.441 22.161 16.428 22.161 16.414 C 22.161 16.392 22.161 16.379 22.175 16.365 C 22.175 16.343 22.188 16.33 22.197 16.316 C 22.211 16.303 22.219 16.303 22.232 16.294 C 22.255 16.28 22.267 16.28 22.281 16.28 C 22.304 16.28 22.316 16.28 22.33 16.294 C 22.352 16.307 22.365 16.307 22.379 16.316 C 22.392 16.326 22.388 16.343 22.401 16.365 Z M 22.304 16.428 C 22.326 16.428 22.326 16.414 22.339 16.414 C 22.352 16.401 22.352 16.392 22.352 16.379 C 22.352 16.366 22.352 16.356 22.339 16.344 C 22.326 16.344 22.316 16.33 22.29 16.33 L 22.219 16.33 L 22.219 16.485 L 22.254 16.485 L 22.254 16.423 L 22.267 16.423 L 22.316 16.485 L 22.352 16.485 L 22.304 16.428 Z M 25.637 2.137 L 25.637 15.667 C 25.637 16.846 24.681 17.804 23.5 17.804 L 2.137 17.804 C 0.957 17.804 0 16.847 0 15.667 L 0 2.137 C 0 0.957 0.957 0 2.137 0 L 23.5 0 C 24.68 0 25.637 0.957 25.637 2.137 Z M 2.85 7.281 C 2.85 10.686 5.614 13.445 9.014 13.445 C 10.224 13.445 11.412 13.08 12.418 12.417 C 9.174 9.778 9.196 4.798 12.418 2.158 C 11.412 1.491 10.224 1.13 9.014 1.13 C 5.614 1.126 2.85 3.889 2.85 7.281 Z M 12.819 12.124 C 15.957 9.676 15.943 4.905 12.819 2.444 C 9.695 4.905 9.681 9.681 12.819 12.124 Z M 6.485 15.52 C 6.485 15.133 6.231 14.879 5.831 14.866 C 5.626 14.866 5.408 14.928 5.261 15.155 C 5.154 14.972 4.972 14.866 4.718 14.866 C 4.549 14.866 4.38 14.928 4.246 15.106 L 4.246 14.91 L 3.881 14.91 L 3.881 16.544 L 4.246 16.544 C 4.246 15.703 4.135 15.2 4.647 15.2 C 5.101 15.2 5.012 15.654 5.012 16.544 L 5.364 16.544 C 5.364 15.729 5.252 15.2 5.764 15.2 C 6.218 15.2 6.129 15.645 6.129 16.544 L 6.494 16.544 L 6.494 15.52 L 6.485 15.52 Z M 8.484 14.91 L 8.132 14.91 L 8.132 15.106 C 8.012 14.959 7.843 14.866 7.612 14.866 C 7.153 14.866 6.802 15.231 6.802 15.724 C 6.802 16.223 7.153 16.583 7.612 16.583 C 7.843 16.583 8.012 16.498 8.132 16.343 L 8.132 16.548 L 8.484 16.548 L 8.484 14.91 Z M 10.287 16.05 C 10.287 15.382 9.268 15.684 9.268 15.373 C 9.268 15.119 9.797 15.16 10.091 15.324 L 10.238 15.035 C 9.819 14.763 8.893 14.768 8.893 15.4 C 8.893 16.036 9.912 15.769 9.912 16.067 C 9.912 16.348 9.312 16.325 8.991 16.103 L 8.836 16.383 C 9.334 16.721 10.287 16.65 10.287 16.05 Z M 11.862 16.463 L 11.765 16.16 C 11.596 16.253 11.221 16.356 11.221 15.978 L 11.221 15.239 L 11.805 15.239 L 11.805 14.91 L 11.221 14.91 L 11.221 14.411 L 10.856 14.411 L 10.856 14.91 L 10.518 14.91 L 10.518 15.235 L 10.856 15.235 L 10.856 15.978 C 10.856 16.762 11.626 16.619 11.862 16.463 Z M 12.454 15.867 L 13.678 15.867 C 13.678 15.146 13.348 14.861 12.903 14.861 C 12.431 14.861 12.093 15.212 12.093 15.72 C 12.093 16.632 13.099 16.783 13.598 16.352 L 13.429 16.085 C 13.082 16.37 12.556 16.343 12.454 15.867 Z M 15.085 14.91 C 14.88 14.821 14.569 14.83 14.408 15.106 L 14.408 14.91 L 14.043 14.91 L 14.043 16.544 L 14.408 16.544 L 14.408 15.623 C 14.408 15.106 14.831 15.173 14.978 15.248 L 15.085 14.91 Z M 15.556 15.724 C 15.556 15.216 16.073 15.052 16.478 15.35 L 16.647 15.061 C 16.13 14.656 15.191 14.878 15.191 15.728 C 15.191 16.61 16.188 16.787 16.647 16.396 L 16.478 16.107 C 16.068 16.396 15.556 16.223 15.556 15.724 Z M 18.525 14.91 L 18.159 14.91 L 18.159 15.106 C 17.79 14.616 16.829 14.893 16.829 15.724 C 16.829 16.579 17.825 16.824 18.159 16.343 L 18.159 16.548 L 18.525 16.548 L 18.525 14.91 Z M 20.024 14.91 C 19.918 14.857 19.535 14.781 19.348 15.106 L 19.348 14.91 L 18.996 14.91 L 18.996 16.544 L 19.348 16.544 L 19.348 15.623 C 19.348 15.133 19.749 15.164 19.918 15.248 L 20.024 14.91 Z M 21.818 14.247 L 21.466 14.247 L 21.466 15.106 C 21.101 14.621 20.136 14.879 20.136 15.724 C 20.136 16.588 21.137 16.819 21.466 16.343 L 21.466 16.548 L 21.818 16.548 L 21.818 14.247 Z M 22.157 10.905 L 22.157 11.11 L 22.192 11.11 L 22.192 10.905 L 22.276 10.905 L 22.276 10.87 L 22.071 10.87 L 22.071 10.905 L 22.157 10.905 Z M 22.45 16.414 C 22.45 16.392 22.45 16.365 22.437 16.343 C 22.424 16.329 22.415 16.308 22.402 16.294 C 22.389 16.28 22.367 16.272 22.353 16.259 C 22.331 16.259 22.304 16.245 22.282 16.245 C 22.268 16.245 22.247 16.259 22.219 16.259 C 22.197 16.272 22.184 16.281 22.171 16.294 C 22.148 16.307 22.135 16.329 22.135 16.343 C 22.122 16.365 22.122 16.392 22.122 16.414 C 22.122 16.428 22.122 16.449 22.135 16.477 C 22.135 16.49 22.149 16.512 22.171 16.526 C 22.183 16.539 22.193 16.548 22.219 16.561 C 22.242 16.574 22.268 16.574 22.282 16.574 C 22.304 16.574 22.331 16.574 22.353 16.561 C 22.367 16.547 22.388 16.538 22.402 16.526 C 22.416 16.513 22.425 16.49 22.437 16.477 C 22.45 16.45 22.45 16.428 22.45 16.414 Z M 22.593 10.865 L 22.53 10.865 L 22.459 11.02 L 22.388 10.865 L 22.325 10.865 L 22.325 11.105 L 22.36 11.105 L 22.36 10.922 L 22.432 11.078 L 22.481 11.078 L 22.543 10.922 L 22.543 11.105 L 22.592 11.105 L 22.593 10.865 Z M 22.788 7.281 C 22.788 3.889 20.024 1.126 16.624 1.126 C 15.414 1.126 14.226 1.491 13.219 2.154 C 16.429 4.794 16.478 9.787 13.219 12.413 C 14.226 13.081 15.423 13.441 16.624 13.441 C 20.024 13.446 22.788 10.686 22.788 7.281 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.957,
      top: 3.753,
      width: 23.72,
      height: 8.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.620,
    height: 3.877,
    viewBox: "0 0 22.620 3.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.62,
      height: 3.877,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.875 L 1.139 3.875 L 1.396 3.258 L 1.971 3.258 L 2.228 3.875 L 4.469 3.875 L 4.469 3.403 L 4.67 3.877 L 5.833 3.877 L 6.033 3.396 L 6.033 3.875 L 11.605 3.875 L 11.602 2.862 L 11.71 2.862 C 11.785 2.864 11.807 2.871 11.807 2.995 L 11.807 3.875 L 14.689 3.875 L 14.689 3.639 C 14.921 3.763 15.283 3.875 15.758 3.875 L 16.97 3.875 L 17.23 3.258 L 17.805 3.258 L 18.059 3.875 L 20.395 3.875 L 20.395 3.288 L 20.748 3.875 L 22.62 3.875 L 22.62 0 L 20.768 0 L 20.768 0.458 L 20.508 0 L 18.607 0 L 18.607 0.458 L 18.369 0 L 15.801 0 C 15.372 0 14.994 0.06 14.689 0.226 L 14.689 0 L 12.917 0 L 12.917 0.226 C 12.722 0.055 12.458 0 12.164 0 L 5.69 0 L 5.256 1.001 L 4.81 0 L 2.771 0 L 2.771 0.458 L 2.547 0 L 0.808 0 L 0 1.842 L 0 3.875 L 0 3.875 Z M 7.192 3.316 L 6.508 3.316 L 6.506 1.14 L 5.539 3.316 L 4.953 3.316 L 3.984 1.138 L 3.984 3.316 L 2.628 3.316 L 2.371 2.696 L 0.983 2.696 L 0.724 3.316 L 0 3.316 L 1.194 0.538 L 2.185 0.538 L 3.319 3.168 L 3.319 0.538 L 4.407 0.538 L 5.28 2.422 L 6.082 0.538 L 7.192 0.538 L 7.192 3.316 L 7.192 3.316 Z M 2.144 2.119 L 1.687 1.012 L 1.233 2.119 L 2.144 2.119 Z M 9.913 3.316 L 7.685 3.316 L 7.685 0.538 L 9.913 0.538 L 9.913 1.116 L 8.352 1.116 L 8.352 1.617 L 9.875 1.617 L 9.875 2.186 L 8.352 2.186 L 8.352 2.741 L 9.913 2.741 L 9.913 3.316 Z M 13.052 1.286 C 13.052 1.729 12.755 1.958 12.582 2.026 C 12.728 2.082 12.852 2.179 12.912 2.26 C 13.006 2.398 13.022 2.522 13.022 2.77 L 13.022 3.316 L 12.35 3.316 L 12.347 2.965 C 12.347 2.798 12.363 2.558 12.242 2.424 C 12.144 2.326 11.996 2.305 11.756 2.305 L 11.04 2.305 L 11.04 3.316 L 10.373 3.316 L 10.373 0.538 L 11.907 0.538 C 12.248 0.538 12.499 0.547 12.714 0.671 C 12.925 0.795 13.052 0.976 13.052 1.286 Z M 12.209 1.698 C 12.117 1.754 12.009 1.756 11.879 1.756 L 11.069 1.756 L 11.069 1.139 L 11.89 1.139 C 12.006 1.139 12.127 1.144 12.206 1.189 C 12.293 1.229 12.346 1.315 12.346 1.434 C 12.346 1.556 12.295 1.653 12.209 1.698 Z M 14.121 3.316 L 13.441 3.316 L 13.441 0.538 L 14.121 0.538 L 14.121 3.316 Z M 22.02 3.316 L 21.075 3.316 L 19.811 1.231 L 19.811 3.316 L 18.453 3.316 L 18.193 2.696 L 16.808 2.696 L 16.556 3.316 L 15.776 3.316 C 15.452 3.316 15.041 3.244 14.809 3.008 C 14.575 2.773 14.453 2.453 14.453 1.948 C 14.453 1.536 14.526 1.159 14.812 0.862 C 15.028 0.64 15.365 0.538 15.825 0.538 L 16.471 0.538 L 16.471 1.133 L 15.838 1.133 C 15.595 1.133 15.458 1.169 15.325 1.297 C 15.212 1.414 15.134 1.636 15.134 1.927 C 15.134 2.224 15.193 2.439 15.317 2.579 C 15.42 2.689 15.606 2.722 15.782 2.722 L 16.081 2.722 L 17.021 0.538 L 18.02 0.538 L 19.149 3.165 L 19.149 0.538 L 20.165 0.538 L 21.337 2.472 L 21.337 0.538 L 22.02 0.538 L 22.02 3.316 Z M 17.966 2.119 L 17.505 1.012 L 17.046 2.119 L 17.966 2.119 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.008,
    height: 3.879,
    viewBox: "0 0 19.008 3.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.712,
      top: 4.775,
      width: 19.008,
      height: 3.879,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.007 2.976 C 18.845 3.212 18.529 3.331 18.102 3.331 L 16.814 3.331 L 16.814 2.736 L 18.097 2.736 C 18.224 2.736 18.313 2.719 18.367 2.667 C 18.413 2.624 18.445 2.561 18.445 2.486 C 18.445 2.405 18.413 2.34 18.364 2.302 C 18.316 2.259 18.245 2.24 18.129 2.24 C 17.503 2.219 16.722 2.259 16.722 1.38 C 16.722 0.977 16.979 0.553 17.678 0.553 L 19.007 0.553 L 19.007 0 L 17.773 0 C 17.4 0 17.13 0.089 16.938 0.227 L 16.938 0 L 15.113 0 C 14.821 0 14.478 0.072 14.316 0.227 L 14.316 0 L 11.056 0 L 11.056 0.227 C 10.797 0.041 10.359 0 10.157 0 L 8.007 0 L 8.007 0.227 C 7.802 0.029 7.345 0 7.067 0 L 4.661 0 L 4.11 0.593 L 3.595 0 L 0 0 L 0 3.877 L 3.527 3.877 L 4.094 3.274 L 4.629 3.877 L 6.803 3.879 L 6.803 2.967 L 7.017 2.967 C 7.305 2.972 7.645 2.96 7.945 2.831 L 7.945 3.877 L 9.739 3.877 L 9.739 2.867 L 9.825 2.867 C 9.935 2.867 9.946 2.871 9.946 2.981 L 9.946 3.877 L 15.394 3.877 C 15.739 3.877 16.101 3.789 16.301 3.629 L 16.301 3.877 L 18.029 3.877 C 18.388 3.877 18.74 3.827 19.007 3.698 L 19.007 2.976 Z M 8.206 1.485 C 8.206 2.257 7.628 2.416 7.045 2.416 L 6.213 2.416 L 6.213 3.348 L 4.917 3.348 L 4.096 2.428 L 3.242 3.348 L 0.601 3.348 L 0.601 0.569 L 3.283 0.569 L 4.103 1.48 L 4.951 0.569 L 7.082 0.569 C 7.611 0.569 8.206 0.715 8.206 1.485 Z M 2.905 2.763 L 1.265 2.763 L 1.265 2.211 L 2.729 2.211 L 2.729 1.644 L 1.265 1.644 L 1.265 1.139 L 2.937 1.139 L 3.666 1.948 L 2.905 2.763 Z M 5.546 3.082 L 4.522 1.95 L 5.546 0.854 L 5.546 3.082 Z M 7.06 1.846 L 6.199 1.846 L 6.199 1.139 L 7.068 1.139 C 7.309 1.139 7.476 1.236 7.476 1.479 C 7.476 1.72 7.317 1.846 7.06 1.846 Z M 11.575 0.569 L 13.8 0.569 L 13.8 1.144 L 12.239 1.144 L 12.239 1.649 L 13.762 1.649 L 13.762 2.216 L 12.239 2.216 L 12.239 2.769 L 13.8 2.771 L 13.8 3.348 L 11.575 3.348 L 11.575 0.569 Z M 10.719 2.057 C 10.868 2.111 10.989 2.209 11.046 2.29 C 11.14 2.426 11.154 2.552 11.156 2.797 L 11.156 3.348 L 10.487 3.348 L 10.487 3 C 10.487 2.833 10.503 2.586 10.379 2.456 C 10.282 2.357 10.133 2.333 9.89 2.333 L 9.177 2.333 L 9.177 3.348 L 8.507 3.348 L 8.507 0.569 L 10.047 0.569 C 10.384 0.569 10.63 0.584 10.849 0.7 C 11.06 0.827 11.192 1 11.192 1.317 C 11.192 1.761 10.895 1.987 10.719 2.057 Z M 10.342 1.705 C 10.253 1.758 10.143 1.763 10.013 1.763 L 9.203 1.763 L 9.203 1.139 L 10.024 1.139 C 10.143 1.139 10.262 1.141 10.342 1.189 C 10.429 1.234 10.48 1.32 10.48 1.439 C 10.48 1.558 10.429 1.653 10.342 1.705 Z M 16.362 1.882 C 16.492 2.016 16.562 2.185 16.562 2.471 C 16.562 3.069 16.186 3.348 15.514 3.348 L 14.215 3.348 L 14.215 2.752 L 15.509 2.752 C 15.635 2.752 15.725 2.735 15.781 2.683 C 15.827 2.64 15.86 2.578 15.86 2.502 C 15.86 2.421 15.824 2.357 15.779 2.318 C 15.728 2.276 15.657 2.257 15.541 2.257 C 14.917 2.235 14.137 2.276 14.137 1.397 C 14.137 0.993 14.391 0.569 15.09 0.569 L 16.427 0.569 L 16.427 1.161 L 15.203 1.161 C 15.082 1.161 15.003 1.165 14.936 1.211 C 14.863 1.256 14.836 1.323 14.836 1.411 C 14.836 1.516 14.898 1.587 14.982 1.618 C 15.052 1.642 15.128 1.649 15.242 1.649 L 15.601 1.659 C 15.963 1.668 16.211 1.73 16.362 1.882 Z M 19.008 1.139 L 17.793 1.139 C 17.672 1.139 17.591 1.143 17.523 1.189 C 17.453 1.234 17.426 1.3 17.426 1.389 C 17.426 1.493 17.485 1.565 17.571 1.596 C 17.642 1.62 17.717 1.627 17.828 1.627 L 18.19 1.637 C 18.554 1.646 18.798 1.708 18.946 1.86 C 18.973 1.882 18.99 1.905 19.008 1.929 L 19.008 1.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e8329a5d46a21c6f-f3d97af6",
    style: {
      position: "relative",
      width: 20.295,
      height: 14.965,
      mixBlendMode: "lighten",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-766c0bac5f158721-d965af24",
    style: {
      position: "relative",
      width: 25.636,
      height: 15.713,
      borderRadius: 2.4233274459838867,
      boxShadow: "inset 0 0 0 1.068px var(--stroke-action-inverted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ff756ba7b5fbe6f3",
    style: {
      position: "relative",
      width: 22.432,
      height: 15.903,
      flexShrink: 0
    }
  }))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 886,
      backgroundColor: "var(--surface-inverted-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 64,
      width: 1216,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 557,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 72,
      lineHeight: "80px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Keep yourself", " ", "updated"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 593,
      height: 209,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--icon-base-default) * 1px)",
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--icon-base-default) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 540,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, props.text1 ?? "Join our VIP mailing list and get exclusive updates and promotions as soon as they are released"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 489,
      height: 109,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 89,
      width: 465,
      height: 20,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)"
    }
  }, props.text2 ?? "Your information will be processed in accordance with our Privacy Policy"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 489,
      borderRadius: 10000000,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-inverted)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingRight: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 60,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-25rem) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-success-inverted)",
      flexShrink: 0
    }
  }, props.text3 ?? "You have successfully subscribed to our newsletter!")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "26px",
      color: "var(--text-inverted-subdued)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Enter your email address*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--action-highlight-default) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0
    }
  }, "Submit"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.983,
    height: 15.001,
    viewBox: "0 0 14.983 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.593,
      top: 3.999,
      width: 14.983,
      height: 15.001,
      color: "var(--icon-base-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.782 0.087 C 9.317 3.028 11.716 5.428 14.656 6.962 C 15.092 7.189 15.092 7.813 14.656 8.04 C 11.716 9.574 9.317 11.974 7.782 14.914 L 7.736 15.001 L 7.243 14.744 L 6.749 14.486 L 6.794 14.399 C 8.13 11.839 10.081 9.663 12.458 8.058 L 0 8.058 L 0 6.943 L 12.458 6.943 C 10.082 5.338 8.13 3.163 6.794 0.603 L 6.749 0.516 L 7.736 0 L 7.782 0.087 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 316,
      width: 1216,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 365,
      width: 1216,
      height: 482.4,
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 378.4,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 116,
      height: 46.4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.152,
      top: 9.04,
      width: 116.244,
      height: 32.515,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.103,
    height: 21.891,
    viewBox: "0 0 20.103 21.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.513,
      top: 6.407,
      width: 20.103,
      height: 21.891,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.71 0 C 3.977 0 0 4.901 0 10.946 C 0 16.992 3.816 21.891 10.71 21.891 C 16.626 21.891 20.103 16.496 20.103 10.452 C 20.103 6.347 17.295 0 10.71 0 Z M 10.71 16.653 C 6.851 16.653 5.125 14.098 5.125 10.945 C 5.125 7.792 6.931 5.237 10.71 5.237 C 14.276 5.237 16.295 7.792 16.295 10.945 C 16.295 14.098 14.435 16.653 10.71 16.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.261,
    height: 27.712,
    viewBox: "0 0 24.261 27.712",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.261,
      height: 27.712,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.428 0 L 18.428 17.314 L 5.363 0 L 0 0 L 0 27.712 L 5.831 27.712 L 5.831 10.075 L 16.17 23.566 C 18.912 22.207 21.805 20.979 23.85 20.371 L 24.261 20.249 L 24.261 0 L 18.43 0 L 18.428 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.488,
    height: 5.901,
    viewBox: "0 0 12.488 5.901",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.771,
      top: 21.813,
      width: 12.488,
      height: 5.901,
      color: "var(--action-highlight-focused)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.487 5.901 L 12.487 0 C 9.292 0.952 3.927 3.48 0.537 5.563 C 0.416 5.637 0.296 5.711 0.181 5.785 C 0.119 5.824 0.059 5.862 0 5.901 L 12.488 5.901 L 12.487 5.901 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.977,
    height: 21.306,
    viewBox: "0 0 20.977 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 95.267,
      top: 6.407,
      width: 20.977,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.977 0 L 14.599 0 L 10.735 6.041 L 6.377 0 L 0 0 L 7.547 10.652 L 0.988 21.306 L 7.364 21.306 L 10.735 15.469 L 14.599 21.306 L 20.977 21.306 L 13.924 10.652 L 20.977 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.883,
    height: 26.108,
    viewBox: "0 0 22.883 26.108",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.685,
      top: 6.407,
      width: 22.883,
      height: 26.108,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.888 0 L 11.555 12.772 L 6.135 0 L 0 0 L 8.75 19.49 L 5.986 26.108 L 11.564 26.108 L 22.883 0 L 16.888 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.071,
    height: 21.306,
    viewBox: "0 0 5.071 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.183,
      top: 6.407,
      width: 5.071,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.624 21.306 L 5.071 21.306 L 5.071 0 L 0.624 0 L 0 3.766 L 0 17.414 L 0.624 21.306 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.103,
    height: 21.891,
    viewBox: "0 0 20.103 21.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.703,
      top: 6.407,
      width: 20.103,
      height: 21.891,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.71 0 C 3.977 0 0 4.901 0 10.946 C 0 16.992 3.816 21.891 10.71 21.891 C 16.626 21.891 20.103 16.496 20.103 10.452 C 20.103 6.347 17.295 0 10.71 0 Z M 10.71 16.653 C 6.851 16.653 5.125 14.098 5.125 10.945 C 5.125 7.792 6.931 5.237 10.71 5.237 C 14.276 5.237 16.295 7.792 16.295 10.945 C 16.295 14.098 14.435 16.653 10.71 16.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.072,
    height: 21.306,
    viewBox: "0 0 5.072 21.306",
    fill: "none",
    style: {
      position: "absolute",
      left: 88.375,
      top: 6.407,
      width: 5.072,
      height: 21.306,
      color: "var(--text-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.625 21.306 L 5.072 21.306 L 5.072 0 L 0.625 0 L 0 3.766 L 0 17.414 L 0.625 21.306 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 70.4,
      width: 1216,
      height: 308
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 389,
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We are a leading global provider of EMV certified cashless payment solutions, telemetry system, and a management & monitoring business suite for the unattended machine industry."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 37,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "2px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Location, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "US"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      transform: "matrix(0,1,-1,0,38,0)",
      transformOrigin: "0 0",
      color: "var(--icon-inverted-default)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.ChevronDown, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Executive Plaza 1, 11350\nMccormick Road, Hunt Valley,\nMaryland 21031"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.Phone, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "(410) 666-3800")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.938,
      top: 6.961,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.562644958496094,
      height: 16.267230987548828,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.561,
    height: 16.262,
    viewBox: "0 0 8.561 16.262",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.817 4.27 L 5.817 6.072 L 8.561 6.072 L 8.119 9.079 L 5.817 9.079 L 5.817 16.175 C 5.351 16.233 4.881 16.262 4.411 16.262 C 3.814 16.263 3.218 16.217 2.628 16.126 L 2.628 9.084 L 0 9.084 L 0.052 6.072 L 2.628 6.072 L 2.628 3.477 C 2.628 1.549 4.363 -0.724 8.561 0.221 L 8.561 2.746 L 7.287 2.769 C 7.089 2.762 6.893 2.797 6.709 2.871 C 6.526 2.944 6.36 3.055 6.222 3.196 C 6.084 3.337 5.977 3.506 5.907 3.69 C 5.837 3.875 5.807 4.072 5.817 4.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 16.046,
    height: 16.405,
    viewBox: "0 0 16.046 16.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.789,
      top: 6.781,
      width: 16.046,
      height: 16.405,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.546 6.948 L 15.519 0 L 14.105 0 L 8.919 6.032 L 4.778 0 L 0 0 L 6.271 9.118 L 0 16.405 L 1.414 16.405 L 6.888 10.034 L 11.268 16.405 L 16.046 16.405 L 9.546 6.948 Z M 7.605 9.208 L 6.968 8.302 L 1.921 1.065 L 4.091 1.065 L 8.172 6.898 L 8.81 7.804 L 14.105 15.379 L 11.935 15.379 L 7.605 9.208 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.332,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.961,
      top: 6.961,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416336059570312,
      height: 13.302857398986816,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.404,
      height: 13.305,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.237,
    height: 3.237,
    viewBox: "0 0 3.237 3.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.237,
      height: 3.237,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.237 1.619 C 3.237 1.939 3.142 2.252 2.964 2.518 C 2.786 2.784 2.534 2.991 2.238 3.114 C 1.942 3.236 1.617 3.268 1.303 3.206 C 0.989 3.144 0.7 2.989 0.474 2.763 C 0.248 2.537 0.094 2.248 0.031 1.934 C -0.031 1.62 0.001 1.295 0.123 0.999 C 0.246 0.703 0.453 0.451 0.719 0.273 C 0.986 0.095 1.298 0 1.619 0 C 2.048 0 2.46 0.171 2.763 0.474 C 3.067 0.778 3.237 1.189 3.237 1.619 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.722,
    height: 8.923,
    viewBox: "0 0 2.722 8.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.258,
      top: 4.375,
      width: 2.722,
      height: 8.923,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.722 0 L 0 0 L 0 8.923 L 2.722 8.923 L 2.722 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.740,
    height: 9.180,
    viewBox: "0 0 8.740 9.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.664,
      top: 4.125,
      width: 8.74,
      height: 9.18,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.695 1.49 L 2.695 0.253 L 0 0.253 L 0 9.176 L 2.695 9.176 L 2.695 5.65 C 2.695 4.123 2.899 3.393 3.267 2.992 L 3.289 2.97 C 3.421 2.82 3.582 2.699 3.762 2.613 C 3.942 2.527 4.137 2.478 4.336 2.469 C 4.536 2.46 4.735 2.49 4.922 2.559 C 5.109 2.628 5.28 2.734 5.426 2.87 C 5.734 3.259 5.888 3.749 5.858 4.245 L 5.858 9.18 L 8.74 9.18 L 8.74 4.476 C 8.74 1.091 7.479 0.164 5.845 0.039 L 5.703 0.028 C 5.113 -0.053 4.512 0.043 3.977 0.303 C 3.441 0.563 2.995 0.976 2.695 1.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.008,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.961,
      top: 7.969,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.332720756530762,
      height: 13.33371639251709,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.894,
    height: 6.894,
    viewBox: "0 0 6.894 6.894",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.219,
      top: 3.219,
      width: 6.894,
      height: 6.894,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.448 1.227 C 3.887 1.227 4.316 1.358 4.681 1.601 C 5.046 1.845 5.331 2.192 5.499 2.598 C 5.667 3.003 5.711 3.45 5.625 3.88 C 5.54 4.311 5.328 4.706 5.018 5.017 C 4.707 5.327 4.312 5.539 3.881 5.624 C 3.451 5.71 3.004 5.666 2.599 5.498 C 2.193 5.33 1.846 5.045 1.602 4.68 C 1.359 4.315 1.228 3.886 1.228 3.447 C 1.228 2.858 1.462 2.294 1.879 1.878 C 2.295 1.461 2.859 1.227 3.448 1.227 Z M 3.448 0 C 2.766 0 2.1 0.202 1.533 0.581 C 0.966 0.959 0.524 1.498 0.263 2.128 C 0.002 2.757 -0.067 3.451 0.066 4.119 C 0.199 4.788 0.527 5.403 1.01 5.885 C 1.492 6.367 2.106 6.695 2.775 6.828 C 3.444 6.961 4.137 6.893 4.767 6.632 C 5.397 6.371 5.935 5.929 6.314 5.362 C 6.692 4.795 6.895 4.128 6.894 3.446 C 6.893 2.533 6.53 1.657 5.884 1.011 C 5.238 0.364 4.362 0.001 3.448 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.333,
    height: 13.329,
    viewBox: "0 0 13.333 13.329",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.605 1.227 C 9.933 1.227 10.259 1.292 10.562 1.418 C 10.865 1.544 11.141 1.728 11.373 1.96 C 11.606 2.192 11.79 2.468 11.915 2.772 C 12.041 3.075 12.105 3.4 12.105 3.729 L 12.105 9.602 C 12.105 9.93 12.041 10.256 11.915 10.559 C 11.79 10.863 11.606 11.138 11.373 11.371 C 11.141 11.603 10.865 11.787 10.562 11.913 C 10.259 12.039 9.933 12.103 9.605 12.103 L 3.732 12.103 C 3.403 12.104 3.078 12.04 2.774 11.914 C 2.471 11.789 2.195 11.605 1.962 11.373 C 1.73 11.142 1.545 10.866 1.419 10.563 C 1.293 10.259 1.228 9.934 1.227 9.606 L 1.227 3.733 C 1.227 3.404 1.291 3.078 1.416 2.774 C 1.542 2.47 1.726 2.194 1.958 1.961 C 2.19 1.729 2.466 1.544 2.77 1.418 C 3.074 1.292 3.399 1.227 3.728 1.227 L 9.605 1.227 Z M 9.605 0 L 3.732 0 C 2.743 0 1.794 0.393 1.094 1.092 C 0.395 1.791 0.001 2.739 0 3.728 L 0 9.601 C 0.001 10.589 0.394 11.537 1.093 12.236 C 1.792 12.935 2.739 13.328 3.728 13.329 L 9.601 13.329 C 10.589 13.329 11.537 12.937 12.237 12.239 C 12.936 11.541 13.33 10.594 13.333 9.606 L 13.333 3.733 C 13.333 2.744 12.94 1.795 12.241 1.095 C 11.542 0.395 10.594 0.001 9.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.627,
    height: 1.627,
    viewBox: "0 0 1.627 1.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.469,
      top: 2.226,
      width: 1.627,
      height: 1.627,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.627 0.813 C 1.627 0.974 1.579 1.131 1.489 1.265 C 1.4 1.399 1.273 1.503 1.124 1.565 C 0.976 1.626 0.812 1.642 0.655 1.611 C 0.497 1.58 0.352 1.502 0.238 1.388 C 0.124 1.275 0.047 1.13 0.016 0.972 C -0.016 0.814 0 0.651 0.062 0.502 C 0.123 0.353 0.228 0.226 0.361 0.137 C 0.495 0.048 0.652 0 0.813 0 C 0.92 0 1.026 0.021 1.124 0.062 C 1.223 0.103 1.313 0.163 1.388 0.238 C 1.464 0.314 1.524 0.403 1.565 0.502 C 1.605 0.601 1.627 0.706 1.627 0.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.898,
    height: 13.919,
    viewBox: "0 0 19.898 13.919",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.984,
      top: 7.969,
      width: 19.898,
      height: 13.919,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.486 2.172 C 19.26 1.316 18.582 0.638 17.726 0.413 C 16.177 0 9.949 0 9.949 0 C 9.949 0 3.721 0 2.172 0.413 C 1.316 0.638 0.638 1.316 0.413 2.172 C 0 3.721 0 6.96 0 6.96 C 0 6.96 0 10.198 0.413 11.747 C 0.638 12.604 1.316 13.281 2.172 13.507 C 3.721 13.919 9.949 13.919 9.949 13.919 C 9.949 13.919 16.177 13.919 17.726 13.507 C 18.582 13.281 19.26 12.604 19.486 11.747 C 19.898 10.198 19.898 6.96 19.898 6.96 C 19.898 6.96 19.898 3.721 19.486 2.172 Z M 7.956 9.949 L 7.956 3.978 L 13.125 6.967 L 7.956 9.957 L 7.956 9.949 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.334,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.686,
      top: 6.666,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.029,
    height: 14.993,
    viewBox: "0 0 13.029 14.993",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.484,
      top: 0.502,
      width: 13.029,
      height: 14.993,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.843 0.013 C 7.661 0 8.474 0.007 9.286 0 C 9.313 1.015 9.725 1.93 10.38 2.607 L 10.379 2.606 C 11.085 3.241 12.003 3.653 13.015 3.723 L 13.029 3.724 L 13.029 6.242 C 12.073 6.218 11.174 5.998 10.363 5.619 L 10.404 5.635 C 10.012 5.447 9.681 5.254 9.366 5.038 L 9.392 5.055 C 9.386 6.879 9.398 8.704 9.379 10.522 C 9.328 11.448 9.02 12.293 8.526 12.998 L 8.536 12.983 C 7.71 14.166 6.372 14.943 4.85 14.989 L 4.843 14.989 C 4.782 14.992 4.709 14.993 4.636 14.993 C 3.771 14.993 2.963 14.752 2.274 14.333 L 2.294 14.345 C 1.04 13.59 0.175 12.3 0.015 10.798 L 0.013 10.778 C 0 10.465 -0.006 10.153 0.007 9.847 C 0.252 7.457 2.254 5.609 4.687 5.609 C 4.961 5.609 5.229 5.632 5.489 5.677 L 5.461 5.673 C 5.474 6.597 5.436 7.522 5.436 8.446 C 5.225 8.37 4.981 8.326 4.726 8.326 C 3.792 8.326 2.998 8.923 2.704 9.756 L 2.699 9.771 C 2.633 9.984 2.594 10.23 2.594 10.484 C 2.594 10.587 2.601 10.689 2.613 10.789 L 2.612 10.777 C 2.778 11.8 3.655 12.572 4.712 12.572 C 4.743 12.572 4.773 12.571 4.803 12.57 L 4.798 12.57 C 5.53 12.548 6.165 12.155 6.524 11.573 L 6.529 11.564 C 6.662 11.378 6.754 11.153 6.784 10.908 L 6.785 10.901 C 6.847 9.783 6.822 8.671 6.828 7.552 C 6.834 5.035 6.822 2.523 6.841 0.011 L 6.843 0.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 519,
      top: -11.5,
      width: 697,
      height: 208
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Solutions")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Management Suite"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "VPOS Touch"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Accessories"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Nayax Capital"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Company Website"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 207,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Support")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FAQs"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shipping"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "How it works "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Resources"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 412,
      top: 0,
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "About")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "About Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Costumer Stories"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Affiliate")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "var(--divider-subdued)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Nayax \xA9 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--icon-inverted-default) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Anti-Money Laundering and KYC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Code of Ethics")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: 8.545417785644531,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.057,
      top: 4.767,
      width: 21.522,
      height: 6.593,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.829,
    height: 6.387,
    viewBox: "0 0 2.829 6.387",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.602,
      top: 0.131,
      width: 2.829,
      height: 6.387,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.387 L 1.089 0 L 2.829 0 L 1.74 6.387 L 0 6.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.224,
    height: 6.593,
    viewBox: "0 0 5.224 6.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.408,
      top: 0,
      width: 5.224,
      height: 6.593,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.224 0.268 C 4.879 0.139 4.339 0 3.664 0 C 1.943 0 0.732 0.866 0.721 2.108 C 0.712 3.026 1.586 3.538 2.247 3.843 C 2.924 4.156 3.152 4.356 3.149 4.636 C 3.145 5.064 2.608 5.259 2.107 5.259 C 1.411 5.259 1.04 5.162 0.469 4.924 L 0.244 4.822 L 0 6.252 C 0.407 6.431 1.159 6.585 1.939 6.593 C 3.769 6.593 4.957 5.737 4.971 4.411 C 4.978 3.684 4.514 3.131 3.509 2.675 C 2.901 2.38 2.528 2.183 2.532 1.884 C 2.532 1.618 2.847 1.334 3.529 1.334 C 4.098 1.325 4.511 1.45 4.832 1.579 L 4.988 1.653 L 5.224 0.268 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.252,
    height: 6.383,
    viewBox: "0 0 6.252 6.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.27,
      top: 0.131,
      width: 6.252,
      height: 6.383,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.843 0 L 3.497 0 C 3.081 0 2.769 0.114 2.586 0.53 L 0 6.383 L 1.828 6.383 C 1.828 6.383 2.127 5.596 2.195 5.423 C 2.395 5.423 4.17 5.426 4.424 5.426 C 4.476 5.65 4.636 6.383 4.636 6.383 L 6.252 6.383 L 4.843 0 Z M 2.708 4.124 C 2.852 3.756 3.402 2.339 3.402 2.339 C 3.391 2.356 3.545 1.969 3.633 1.729 L 3.75 2.28 C 3.75 2.28 4.084 3.805 4.153 4.124 L 2.708 4.124 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.141,
    height: 6.377,
    viewBox: "0 0 6.141 6.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.827,
      top: 0.131,
      width: 6.141,
      height: 6.377,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.297 0 L 2.593 4.356 L 2.411 3.471 C 2.094 2.45 1.105 1.345 0 0.791 L 1.559 6.377 L 3.401 6.375 L 6.141 0 L 4.297 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.229,
    height: 3.474,
    viewBox: "0 0 4.229 3.474",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.131,
      width: 4.229,
      height: 3.474,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.83 0 L 0.022 0 L 0 0.133 C 2.184 0.662 3.629 1.939 4.229 3.474 L 3.619 0.539 C 3.513 0.135 3.208 0.014 2.83 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 25.637,
    height: 17.804,
    viewBox: "0 0 25.637 17.804",
    fill: "none",
    style: {
      position: "relative",
      width: 25.637,
      height: 17.804,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.494 15.724 C 21.494 16.027 21.289 16.245 20.995 16.245 C 20.692 16.245 20.497 16.014 20.497 15.724 C 20.497 15.435 20.692 15.204 20.995 15.204 C 21.289 15.204 21.494 15.435 21.494 15.724 Z M 7.66 15.204 C 7.344 15.204 7.162 15.435 7.162 15.724 C 7.162 16.014 7.345 16.245 7.66 16.245 C 7.95 16.245 8.145 16.027 8.145 15.724 C 8.14 15.435 7.95 15.204 7.66 15.204 Z M 12.89 15.191 C 12.65 15.191 12.502 15.346 12.467 15.578 L 13.317 15.578 C 13.277 15.324 13.122 15.191 12.89 15.191 Z M 17.688 15.204 C 17.385 15.204 17.204 15.435 17.204 15.724 C 17.204 16.014 17.386 16.245 17.688 16.245 C 17.991 16.245 18.187 16.027 18.187 15.724 C 18.187 15.435 17.99 15.204 17.688 15.204 Z M 22.401 16.365 C 22.401 16.379 22.415 16.388 22.415 16.414 C 22.415 16.428 22.401 16.437 22.401 16.463 C 22.388 16.477 22.388 16.485 22.379 16.498 C 22.365 16.512 22.356 16.521 22.33 16.521 C 22.316 16.534 22.308 16.534 22.281 16.534 C 22.267 16.534 22.259 16.534 22.232 16.521 C 22.219 16.521 22.21 16.507 22.197 16.498 C 22.183 16.485 22.175 16.476 22.175 16.463 C 22.161 16.441 22.161 16.428 22.161 16.414 C 22.161 16.392 22.161 16.379 22.175 16.365 C 22.175 16.343 22.188 16.33 22.197 16.316 C 22.211 16.303 22.219 16.303 22.232 16.294 C 22.255 16.28 22.267 16.28 22.281 16.28 C 22.304 16.28 22.316 16.28 22.33 16.294 C 22.352 16.307 22.365 16.307 22.379 16.316 C 22.392 16.326 22.388 16.343 22.401 16.365 Z M 22.304 16.428 C 22.326 16.428 22.326 16.414 22.339 16.414 C 22.352 16.401 22.352 16.392 22.352 16.379 C 22.352 16.366 22.352 16.356 22.339 16.344 C 22.326 16.344 22.316 16.33 22.29 16.33 L 22.219 16.33 L 22.219 16.485 L 22.254 16.485 L 22.254 16.423 L 22.267 16.423 L 22.316 16.485 L 22.352 16.485 L 22.304 16.428 Z M 25.637 2.137 L 25.637 15.667 C 25.637 16.846 24.681 17.804 23.5 17.804 L 2.137 17.804 C 0.957 17.804 0 16.847 0 15.667 L 0 2.137 C 0 0.957 0.957 0 2.137 0 L 23.5 0 C 24.68 0 25.637 0.957 25.637 2.137 Z M 2.85 7.281 C 2.85 10.686 5.614 13.445 9.014 13.445 C 10.224 13.445 11.412 13.08 12.418 12.417 C 9.174 9.778 9.196 4.798 12.418 2.158 C 11.412 1.491 10.224 1.13 9.014 1.13 C 5.614 1.126 2.85 3.889 2.85 7.281 Z M 12.819 12.124 C 15.957 9.676 15.943 4.905 12.819 2.444 C 9.695 4.905 9.681 9.681 12.819 12.124 Z M 6.485 15.52 C 6.485 15.133 6.231 14.879 5.831 14.866 C 5.626 14.866 5.408 14.928 5.261 15.155 C 5.154 14.972 4.972 14.866 4.718 14.866 C 4.549 14.866 4.38 14.928 4.246 15.106 L 4.246 14.91 L 3.881 14.91 L 3.881 16.544 L 4.246 16.544 C 4.246 15.703 4.135 15.2 4.647 15.2 C 5.101 15.2 5.012 15.654 5.012 16.544 L 5.364 16.544 C 5.364 15.729 5.252 15.2 5.764 15.2 C 6.218 15.2 6.129 15.645 6.129 16.544 L 6.494 16.544 L 6.494 15.52 L 6.485 15.52 Z M 8.484 14.91 L 8.132 14.91 L 8.132 15.106 C 8.012 14.959 7.843 14.866 7.612 14.866 C 7.153 14.866 6.802 15.231 6.802 15.724 C 6.802 16.223 7.153 16.583 7.612 16.583 C 7.843 16.583 8.012 16.498 8.132 16.343 L 8.132 16.548 L 8.484 16.548 L 8.484 14.91 Z M 10.287 16.05 C 10.287 15.382 9.268 15.684 9.268 15.373 C 9.268 15.119 9.797 15.16 10.091 15.324 L 10.238 15.035 C 9.819 14.763 8.893 14.768 8.893 15.4 C 8.893 16.036 9.912 15.769 9.912 16.067 C 9.912 16.348 9.312 16.325 8.991 16.103 L 8.836 16.383 C 9.334 16.721 10.287 16.65 10.287 16.05 Z M 11.862 16.463 L 11.765 16.16 C 11.596 16.253 11.221 16.356 11.221 15.978 L 11.221 15.239 L 11.805 15.239 L 11.805 14.91 L 11.221 14.91 L 11.221 14.411 L 10.856 14.411 L 10.856 14.91 L 10.518 14.91 L 10.518 15.235 L 10.856 15.235 L 10.856 15.978 C 10.856 16.762 11.626 16.619 11.862 16.463 Z M 12.454 15.867 L 13.678 15.867 C 13.678 15.146 13.348 14.861 12.903 14.861 C 12.431 14.861 12.093 15.212 12.093 15.72 C 12.093 16.632 13.099 16.783 13.598 16.352 L 13.429 16.085 C 13.082 16.37 12.556 16.343 12.454 15.867 Z M 15.085 14.91 C 14.88 14.821 14.569 14.83 14.408 15.106 L 14.408 14.91 L 14.043 14.91 L 14.043 16.544 L 14.408 16.544 L 14.408 15.623 C 14.408 15.106 14.831 15.173 14.978 15.248 L 15.085 14.91 Z M 15.556 15.724 C 15.556 15.216 16.073 15.052 16.478 15.35 L 16.647 15.061 C 16.13 14.656 15.191 14.878 15.191 15.728 C 15.191 16.61 16.188 16.787 16.647 16.396 L 16.478 16.107 C 16.068 16.396 15.556 16.223 15.556 15.724 Z M 18.525 14.91 L 18.159 14.91 L 18.159 15.106 C 17.79 14.616 16.829 14.893 16.829 15.724 C 16.829 16.579 17.825 16.824 18.159 16.343 L 18.159 16.548 L 18.525 16.548 L 18.525 14.91 Z M 20.024 14.91 C 19.918 14.857 19.535 14.781 19.348 15.106 L 19.348 14.91 L 18.996 14.91 L 18.996 16.544 L 19.348 16.544 L 19.348 15.623 C 19.348 15.133 19.749 15.164 19.918 15.248 L 20.024 14.91 Z M 21.818 14.247 L 21.466 14.247 L 21.466 15.106 C 21.101 14.621 20.136 14.879 20.136 15.724 C 20.136 16.588 21.137 16.819 21.466 16.343 L 21.466 16.548 L 21.818 16.548 L 21.818 14.247 Z M 22.157 10.905 L 22.157 11.11 L 22.192 11.11 L 22.192 10.905 L 22.276 10.905 L 22.276 10.87 L 22.071 10.87 L 22.071 10.905 L 22.157 10.905 Z M 22.45 16.414 C 22.45 16.392 22.45 16.365 22.437 16.343 C 22.424 16.329 22.415 16.308 22.402 16.294 C 22.389 16.28 22.367 16.272 22.353 16.259 C 22.331 16.259 22.304 16.245 22.282 16.245 C 22.268 16.245 22.247 16.259 22.219 16.259 C 22.197 16.272 22.184 16.281 22.171 16.294 C 22.148 16.307 22.135 16.329 22.135 16.343 C 22.122 16.365 22.122 16.392 22.122 16.414 C 22.122 16.428 22.122 16.449 22.135 16.477 C 22.135 16.49 22.149 16.512 22.171 16.526 C 22.183 16.539 22.193 16.548 22.219 16.561 C 22.242 16.574 22.268 16.574 22.282 16.574 C 22.304 16.574 22.331 16.574 22.353 16.561 C 22.367 16.547 22.388 16.538 22.402 16.526 C 22.416 16.513 22.425 16.49 22.437 16.477 C 22.45 16.45 22.45 16.428 22.45 16.414 Z M 22.593 10.865 L 22.53 10.865 L 22.459 11.02 L 22.388 10.865 L 22.325 10.865 L 22.325 11.105 L 22.36 11.105 L 22.36 10.922 L 22.432 11.078 L 22.481 11.078 L 22.543 10.922 L 22.543 11.105 L 22.592 11.105 L 22.593 10.865 Z M 22.788 7.281 C 22.788 3.889 20.024 1.126 16.624 1.126 C 15.414 1.126 14.226 1.491 13.219 2.154 C 16.429 4.794 16.478 9.787 13.219 12.413 C 14.226 13.081 15.423 13.441 16.624 13.441 C 20.024 13.446 22.788 10.686 22.788 7.281 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.957,
      top: 3.753,
      width: 23.721,
      height: 8.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.620,
    height: 3.877,
    viewBox: "0 0 22.620 3.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.62,
      height: 3.877,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.875 L 1.139 3.875 L 1.396 3.258 L 1.971 3.258 L 2.228 3.875 L 4.469 3.875 L 4.469 3.403 L 4.67 3.877 L 5.833 3.877 L 6.033 3.396 L 6.033 3.875 L 11.605 3.875 L 11.602 2.862 L 11.71 2.862 C 11.785 2.864 11.807 2.871 11.807 2.995 L 11.807 3.875 L 14.689 3.875 L 14.689 3.639 C 14.921 3.763 15.283 3.875 15.758 3.875 L 16.97 3.875 L 17.23 3.258 L 17.805 3.258 L 18.059 3.875 L 20.395 3.875 L 20.395 3.288 L 20.748 3.875 L 22.62 3.875 L 22.62 0 L 20.768 0 L 20.768 0.458 L 20.508 0 L 18.607 0 L 18.607 0.458 L 18.369 0 L 15.801 0 C 15.372 0 14.994 0.06 14.689 0.226 L 14.689 0 L 12.917 0 L 12.917 0.226 C 12.722 0.055 12.458 0 12.164 0 L 5.69 0 L 5.256 1.001 L 4.81 0 L 2.771 0 L 2.771 0.458 L 2.547 0 L 0.808 0 L 0 1.842 L 0 3.875 L 0 3.875 Z M 7.192 3.316 L 6.508 3.316 L 6.506 1.14 L 5.539 3.316 L 4.953 3.316 L 3.984 1.138 L 3.984 3.316 L 2.628 3.316 L 2.371 2.696 L 0.983 2.696 L 0.724 3.316 L 0 3.316 L 1.194 0.538 L 2.185 0.538 L 3.319 3.168 L 3.319 0.538 L 4.407 0.538 L 5.28 2.422 L 6.082 0.538 L 7.192 0.538 L 7.192 3.316 L 7.192 3.316 Z M 2.144 2.119 L 1.687 1.012 L 1.233 2.119 L 2.144 2.119 Z M 9.913 3.316 L 7.685 3.316 L 7.685 0.538 L 9.913 0.538 L 9.913 1.116 L 8.352 1.116 L 8.352 1.617 L 9.875 1.617 L 9.875 2.186 L 8.352 2.186 L 8.352 2.741 L 9.913 2.741 L 9.913 3.316 Z M 13.052 1.286 C 13.052 1.729 12.755 1.958 12.582 2.026 C 12.728 2.082 12.852 2.179 12.912 2.26 C 13.006 2.398 13.022 2.522 13.022 2.77 L 13.022 3.316 L 12.35 3.316 L 12.347 2.965 C 12.347 2.798 12.363 2.558 12.242 2.424 C 12.144 2.326 11.996 2.305 11.756 2.305 L 11.04 2.305 L 11.04 3.316 L 10.373 3.316 L 10.373 0.538 L 11.907 0.538 C 12.248 0.538 12.499 0.547 12.714 0.671 C 12.925 0.795 13.052 0.976 13.052 1.286 Z M 12.209 1.698 C 12.117 1.754 12.009 1.756 11.879 1.756 L 11.069 1.756 L 11.069 1.139 L 11.89 1.139 C 12.006 1.139 12.127 1.144 12.206 1.189 C 12.293 1.229 12.346 1.315 12.346 1.434 C 12.346 1.556 12.295 1.653 12.209 1.698 Z M 14.121 3.316 L 13.441 3.316 L 13.441 0.538 L 14.121 0.538 L 14.121 3.316 Z M 22.02 3.316 L 21.075 3.316 L 19.811 1.231 L 19.811 3.316 L 18.453 3.316 L 18.193 2.696 L 16.808 2.696 L 16.556 3.316 L 15.776 3.316 C 15.452 3.316 15.041 3.244 14.809 3.008 C 14.575 2.773 14.453 2.453 14.453 1.948 C 14.453 1.536 14.526 1.159 14.812 0.862 C 15.028 0.64 15.365 0.538 15.825 0.538 L 16.471 0.538 L 16.471 1.133 L 15.838 1.133 C 15.595 1.133 15.458 1.169 15.325 1.297 C 15.212 1.414 15.134 1.636 15.134 1.927 C 15.134 2.224 15.193 2.439 15.317 2.579 C 15.42 2.689 15.606 2.722 15.782 2.722 L 16.081 2.722 L 17.021 0.538 L 18.02 0.538 L 19.149 3.165 L 19.149 0.538 L 20.165 0.538 L 21.337 2.472 L 21.337 0.538 L 22.02 0.538 L 22.02 3.316 Z M 17.966 2.119 L 17.505 1.012 L 17.046 2.119 L 17.966 2.119 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.008,
    height: 3.879,
    viewBox: "0 0 19.008 3.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.712,
      top: 4.775,
      width: 19.008,
      height: 3.879,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.007 2.976 C 18.845 3.212 18.529 3.331 18.102 3.331 L 16.814 3.331 L 16.814 2.736 L 18.097 2.736 C 18.224 2.736 18.313 2.719 18.367 2.667 C 18.413 2.624 18.445 2.561 18.445 2.486 C 18.445 2.405 18.413 2.34 18.364 2.302 C 18.316 2.259 18.245 2.24 18.129 2.24 C 17.503 2.219 16.722 2.259 16.722 1.38 C 16.722 0.977 16.979 0.553 17.678 0.553 L 19.007 0.553 L 19.007 0 L 17.773 0 C 17.4 0 17.13 0.089 16.938 0.227 L 16.938 0 L 15.113 0 C 14.821 0 14.478 0.072 14.316 0.227 L 14.316 0 L 11.056 0 L 11.056 0.227 C 10.797 0.041 10.359 0 10.157 0 L 8.007 0 L 8.007 0.227 C 7.802 0.029 7.345 0 7.067 0 L 4.661 0 L 4.11 0.593 L 3.595 0 L 0 0 L 0 3.877 L 3.527 3.877 L 4.094 3.274 L 4.629 3.877 L 6.803 3.879 L 6.803 2.967 L 7.017 2.967 C 7.305 2.972 7.645 2.96 7.945 2.831 L 7.945 3.877 L 9.739 3.877 L 9.739 2.867 L 9.825 2.867 C 9.935 2.867 9.946 2.871 9.946 2.981 L 9.946 3.877 L 15.394 3.877 C 15.739 3.877 16.101 3.789 16.301 3.629 L 16.301 3.877 L 18.029 3.877 C 18.388 3.877 18.74 3.827 19.007 3.698 L 19.007 2.976 Z M 8.206 1.485 C 8.206 2.257 7.628 2.416 7.045 2.416 L 6.213 2.416 L 6.213 3.348 L 4.917 3.348 L 4.096 2.428 L 3.242 3.348 L 0.601 3.348 L 0.601 0.569 L 3.283 0.569 L 4.103 1.48 L 4.951 0.569 L 7.082 0.569 C 7.611 0.569 8.206 0.715 8.206 1.485 Z M 2.905 2.763 L 1.265 2.763 L 1.265 2.211 L 2.729 2.211 L 2.729 1.644 L 1.265 1.644 L 1.265 1.139 L 2.937 1.139 L 3.666 1.948 L 2.905 2.763 Z M 5.546 3.082 L 4.522 1.95 L 5.546 0.854 L 5.546 3.082 Z M 7.06 1.846 L 6.199 1.846 L 6.199 1.139 L 7.068 1.139 C 7.309 1.139 7.476 1.236 7.476 1.479 C 7.476 1.72 7.317 1.846 7.06 1.846 Z M 11.575 0.569 L 13.8 0.569 L 13.8 1.144 L 12.239 1.144 L 12.239 1.649 L 13.762 1.649 L 13.762 2.216 L 12.239 2.216 L 12.239 2.769 L 13.8 2.771 L 13.8 3.348 L 11.575 3.348 L 11.575 0.569 Z M 10.719 2.057 C 10.868 2.111 10.989 2.209 11.046 2.29 C 11.14 2.426 11.154 2.552 11.156 2.797 L 11.156 3.348 L 10.487 3.348 L 10.487 3 C 10.487 2.833 10.503 2.586 10.379 2.456 C 10.282 2.357 10.133 2.333 9.89 2.333 L 9.177 2.333 L 9.177 3.348 L 8.507 3.348 L 8.507 0.569 L 10.047 0.569 C 10.384 0.569 10.63 0.584 10.849 0.7 C 11.06 0.827 11.192 1 11.192 1.317 C 11.192 1.761 10.895 1.987 10.719 2.057 Z M 10.342 1.705 C 10.253 1.758 10.143 1.763 10.013 1.763 L 9.203 1.763 L 9.203 1.139 L 10.024 1.139 C 10.143 1.139 10.262 1.141 10.342 1.189 C 10.429 1.234 10.48 1.32 10.48 1.439 C 10.48 1.558 10.429 1.653 10.342 1.705 Z M 16.362 1.882 C 16.492 2.016 16.562 2.185 16.562 2.471 C 16.562 3.069 16.186 3.348 15.514 3.348 L 14.215 3.348 L 14.215 2.752 L 15.509 2.752 C 15.635 2.752 15.725 2.735 15.781 2.683 C 15.827 2.64 15.86 2.578 15.86 2.502 C 15.86 2.421 15.824 2.357 15.779 2.318 C 15.728 2.276 15.657 2.257 15.541 2.257 C 14.917 2.235 14.137 2.276 14.137 1.397 C 14.137 0.993 14.391 0.569 15.09 0.569 L 16.427 0.569 L 16.427 1.161 L 15.203 1.161 C 15.082 1.161 15.003 1.165 14.936 1.211 C 14.863 1.256 14.836 1.323 14.836 1.411 C 14.836 1.516 14.898 1.587 14.982 1.618 C 15.052 1.642 15.128 1.649 15.242 1.649 L 15.601 1.659 C 15.963 1.668 16.211 1.73 16.362 1.882 Z M 19.008 1.139 L 17.793 1.139 C 17.672 1.139 17.591 1.143 17.523 1.189 C 17.453 1.234 17.426 1.3 17.426 1.389 C 17.426 1.493 17.485 1.565 17.571 1.596 C 17.642 1.62 17.717 1.627 17.828 1.627 L 18.19 1.637 C 18.554 1.646 18.798 1.708 18.946 1.86 C 18.973 1.882 18.99 1.905 19.008 1.929 L 19.008 1.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e8329a5d46a21c6f-f3d97af6",
    style: {
      position: "relative",
      width: 20.295,
      height: 14.965,
      mixBlendMode: "lighten",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-766c0bac5f158721-d965af24",
    style: {
      position: "relative",
      width: 25.636,
      height: 15.713,
      borderRadius: 2.4233274459838867,
      boxShadow: "inset 0 0 0 1.068px var(--stroke-action-inverted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ff756ba7b5fbe6f3",
    style: {
      position: "relative",
      width: 22.432,
      height: 15.903,
      flexShrink: 0
    }
  }))))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 360,
      backgroundColor: "rgb(38,38,38)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      padding: "40px 16px 32px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--icon-inverted-default) * 1px)",
      paddingRight: "calc(var(--text-base-default) * 1px)",
      paddingBottom: "calc(var(--action-highlight-default) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 56,
      lineHeight: "64px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255,255,255)"
    }
  }, "Keep yourself "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255,255,255)"
    }
  }, "updated")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Join our VIP mailing list and get exclusive updates and promotions as soon as they are released")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-75rem-2) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10000000,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-inverted)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingRight: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      lineHeight: "25px",
      color: "var(--text-inverted-subdued)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Enter your email address*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--action-highlight-default)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.ArrowRight, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10000000,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--0-5rem-2) * 1px)",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingRight: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.ArrowRight2, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text3 ?? "Your information will be processed in accordance with our Privacy Policy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--icon-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 90,
      height: 36,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.117,
      top: 7.014,
      width: 90.191,
      height: 25.226,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.597,
    height: 16.984,
    viewBox: "0 0 15.597 16.984",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.569,
      top: 4.97,
      width: 15.597,
      height: 16.984,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.31 0 C 3.086 0 0 3.802 0 8.493 C 0 13.183 2.961 16.984 8.31 16.984 C 12.899 16.984 15.597 12.799 15.597 8.109 C 15.597 4.924 13.418 0 8.31 0 Z M 8.31 12.92 C 5.316 12.92 3.976 10.938 3.976 8.492 C 3.976 6.045 5.377 4.063 8.31 4.063 C 11.076 4.063 12.643 6.045 12.643 8.492 C 12.643 10.938 11.2 12.92 8.31 12.92 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.823,
    height: 21.501,
    viewBox: "0 0 18.823 21.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.823,
      height: 21.501,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.298 0 L 14.298 13.433 L 4.161 0 L 0 0 L 0 21.501 L 4.524 21.501 L 4.524 7.817 L 12.546 18.284 C 14.673 17.23 16.918 16.277 18.504 15.805 L 18.823 15.71 L 18.823 0 L 14.299 0 L 14.298 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.689,
    height: 4.578,
    viewBox: "0 0 9.689 4.578",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.135,
      top: 16.922,
      width: 9.689,
      height: 4.578,
      color: "rgb(255,205,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.688 4.578 L 9.688 0 C 7.21 0.739 3.047 2.7 0.416 4.316 C 0.323 4.374 0.23 4.431 0.141 4.488 C 0.093 4.519 0.046 4.548 0 4.578 L 9.689 4.578 L 9.688 4.578 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.275,
    height: 16.531,
    viewBox: "0 0 16.275 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 73.916,
      top: 4.97,
      width: 16.275,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.275 0 L 11.327 0 L 8.329 4.687 L 4.947 0 L 0 0 L 5.855 8.265 L 0.766 16.531 L 5.714 16.531 L 8.329 12.002 L 11.327 16.531 L 16.275 16.531 L 10.803 8.265 L 16.275 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.754,
    height: 20.256,
    viewBox: "0 0 17.754 20.256",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.546,
      top: 4.97,
      width: 17.754,
      height: 20.256,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.103 0 L 8.965 9.909 L 4.76 0 L 0 0 L 6.789 15.121 L 4.644 20.256 L 8.972 20.256 L 17.754 0 L 13.103 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.934,
    height: 16.531,
    viewBox: "0 0 3.934 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.504,
      top: 4.97,
      width: 3.934,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.484 16.531 L 3.934 16.531 L 3.934 0 L 0.484 0 L 0 2.922 L 0 13.511 L 0.484 16.531 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.597,
    height: 16.984,
    viewBox: "0 0 15.597 16.984",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.632,
      top: 4.97,
      width: 15.597,
      height: 16.984,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.31 0 C 3.086 0 0 3.802 0 8.493 C 0 13.183 2.961 16.984 8.31 16.984 C 12.899 16.984 15.597 12.799 15.597 8.109 C 15.597 4.924 13.418 0 8.31 0 Z M 8.31 12.92 C 5.316 12.92 3.976 10.938 3.976 8.492 C 3.976 6.045 5.377 4.063 8.31 4.063 C 11.076 4.063 12.643 6.045 12.643 8.492 C 12.643 10.938 11.2 12.92 8.31 12.92 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.935,
    height: 16.531,
    viewBox: "0 0 3.935 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 68.566,
      top: 4.97,
      width: 3.935,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.485 16.531 L 3.935 16.531 L 3.935 0 L 0.485 0 L 0 2.922 L 0 13.511 L 0.485 16.531 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "23px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text4 ?? "We are a leading global provider of EMV certified cashless payment solutions, telemetry system, and a management & monitoring business suite for the unattended machine industry."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.Location, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 39,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "US"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      transform: "matrix(0,1,-1,0,39,0)",
      transformOrigin: "0 0",
      color: "var(--icon-inverted-default)"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.ChevronDown, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Executive Plaza 1, 11350\nMccormick Road, Hunt Valley,  Maryland 21031"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Phone, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "(410) 666-3800"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 30,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.938,
      top: 6.961,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.562644958496094,
      height: 16.267230987548828,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.561,
    height: 16.262,
    viewBox: "0 0 8.561 16.262",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.817 4.27 L 5.817 6.072 L 8.561 6.072 L 8.119 9.079 L 5.817 9.079 L 5.817 16.175 C 5.351 16.233 4.881 16.262 4.411 16.262 C 3.814 16.263 3.218 16.217 2.628 16.126 L 2.628 9.084 L 0 9.084 L 0.052 6.072 L 2.628 6.072 L 2.628 3.477 C 2.628 1.549 4.363 -0.724 8.561 0.221 L 8.561 2.746 L 7.287 2.769 C 7.089 2.762 6.893 2.797 6.709 2.871 C 6.526 2.944 6.36 3.055 6.222 3.196 C 6.084 3.337 5.977 3.506 5.907 3.69 C 5.837 3.875 5.807 4.072 5.817 4.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 16.046,
    height: 16.405,
    viewBox: "0 0 16.046 16.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.789,
      top: 6.781,
      width: 16.046,
      height: 16.405,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.546 6.948 L 15.519 0 L 14.105 0 L 8.919 6.032 L 4.778 0 L 0 0 L 6.271 9.118 L 0 16.405 L 1.414 16.405 L 6.888 10.034 L 11.268 16.405 L 16.046 16.405 L 9.546 6.948 Z M 7.605 9.208 L 6.968 8.302 L 1.921 1.065 L 4.091 1.065 L 8.172 6.898 L 8.81 7.804 L 14.105 15.379 L 11.935 15.379 L 7.605 9.208 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.961,
      top: 6.961,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416336059570312,
      height: 13.302857398986816,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.404,
      height: 13.305,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.237,
    height: 3.237,
    viewBox: "0 0 3.237 3.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.237,
      height: 3.237,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.237 1.619 C 3.237 1.939 3.142 2.252 2.964 2.518 C 2.786 2.784 2.534 2.991 2.238 3.114 C 1.942 3.236 1.617 3.268 1.303 3.206 C 0.989 3.144 0.7 2.989 0.474 2.763 C 0.248 2.537 0.094 2.248 0.031 1.934 C -0.031 1.62 0.001 1.295 0.123 0.999 C 0.246 0.703 0.453 0.451 0.719 0.273 C 0.986 0.095 1.298 0 1.619 0 C 2.048 0 2.46 0.171 2.763 0.474 C 3.067 0.778 3.237 1.189 3.237 1.619 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.722,
    height: 8.923,
    viewBox: "0 0 2.722 8.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.258,
      top: 4.375,
      width: 2.722,
      height: 8.923,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.722 0 L 0 0 L 0 8.923 L 2.722 8.923 L 2.722 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.740,
    height: 9.180,
    viewBox: "0 0 8.740 9.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.664,
      top: 4.125,
      width: 8.74,
      height: 9.18,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.695 1.49 L 2.695 0.253 L 0 0.253 L 0 9.176 L 2.695 9.176 L 2.695 5.65 C 2.695 4.123 2.899 3.393 3.267 2.992 L 3.289 2.97 C 3.421 2.82 3.582 2.699 3.762 2.613 C 3.942 2.527 4.137 2.478 4.336 2.469 C 4.536 2.46 4.735 2.49 4.922 2.559 C 5.109 2.628 5.28 2.734 5.426 2.87 C 5.734 3.259 5.888 3.749 5.858 4.245 L 5.858 9.18 L 8.74 9.18 L 8.74 4.476 C 8.74 1.091 7.479 0.164 5.845 0.039 L 5.703 0.028 C 5.113 -0.053 4.512 0.043 3.977 0.303 C 3.441 0.563 2.995 0.976 2.695 1.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.008,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.961,
      top: 7.969,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.332720756530762,
      height: 13.33371639251709,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.894,
    height: 6.894,
    viewBox: "0 0 6.894 6.894",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.219,
      top: 3.219,
      width: 6.894,
      height: 6.894,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.448 1.227 C 3.887 1.227 4.316 1.358 4.681 1.601 C 5.046 1.845 5.331 2.192 5.499 2.598 C 5.667 3.003 5.711 3.45 5.625 3.88 C 5.54 4.311 5.328 4.706 5.018 5.017 C 4.707 5.327 4.312 5.539 3.881 5.624 C 3.451 5.71 3.004 5.666 2.599 5.498 C 2.193 5.33 1.846 5.045 1.602 4.68 C 1.359 4.315 1.228 3.886 1.228 3.447 C 1.228 2.858 1.462 2.294 1.879 1.878 C 2.295 1.461 2.859 1.227 3.448 1.227 Z M 3.448 0 C 2.766 0 2.1 0.202 1.533 0.581 C 0.966 0.959 0.524 1.498 0.263 2.128 C 0.002 2.757 -0.067 3.451 0.066 4.119 C 0.199 4.788 0.527 5.403 1.01 5.885 C 1.492 6.367 2.106 6.695 2.775 6.828 C 3.444 6.961 4.137 6.893 4.767 6.632 C 5.397 6.371 5.935 5.929 6.314 5.362 C 6.692 4.795 6.895 4.128 6.894 3.446 C 6.893 2.533 6.53 1.657 5.884 1.011 C 5.238 0.364 4.362 0.001 3.448 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.333,
    height: 13.329,
    viewBox: "0 0 13.333 13.329",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.605 1.227 C 9.933 1.227 10.259 1.292 10.562 1.418 C 10.865 1.544 11.141 1.728 11.373 1.96 C 11.606 2.192 11.79 2.468 11.915 2.772 C 12.041 3.075 12.105 3.4 12.105 3.729 L 12.105 9.602 C 12.105 9.93 12.041 10.256 11.915 10.559 C 11.79 10.863 11.606 11.138 11.373 11.371 C 11.141 11.603 10.865 11.787 10.562 11.913 C 10.259 12.039 9.933 12.103 9.605 12.103 L 3.732 12.103 C 3.403 12.104 3.078 12.04 2.774 11.914 C 2.471 11.789 2.195 11.605 1.962 11.373 C 1.73 11.142 1.545 10.866 1.419 10.563 C 1.293 10.259 1.228 9.934 1.227 9.606 L 1.227 3.733 C 1.227 3.404 1.291 3.078 1.416 2.774 C 1.542 2.47 1.726 2.194 1.958 1.961 C 2.19 1.729 2.466 1.544 2.77 1.418 C 3.074 1.292 3.399 1.227 3.728 1.227 L 9.605 1.227 Z M 9.605 0 L 3.732 0 C 2.743 0 1.794 0.393 1.094 1.092 C 0.395 1.791 0.001 2.739 0 3.728 L 0 9.601 C 0.001 10.589 0.394 11.537 1.093 12.236 C 1.792 12.935 2.739 13.328 3.728 13.329 L 9.601 13.329 C 10.589 13.329 11.537 12.937 12.237 12.239 C 12.936 11.541 13.33 10.594 13.333 9.606 L 13.333 3.733 C 13.333 2.744 12.94 1.795 12.241 1.095 C 11.542 0.395 10.594 0.001 9.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.627,
    height: 1.627,
    viewBox: "0 0 1.627 1.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.469,
      top: 2.226,
      width: 1.627,
      height: 1.627,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.627 0.813 C 1.627 0.974 1.579 1.131 1.489 1.265 C 1.4 1.399 1.273 1.503 1.124 1.565 C 0.976 1.626 0.812 1.642 0.655 1.611 C 0.497 1.58 0.352 1.502 0.238 1.388 C 0.124 1.275 0.047 1.13 0.016 0.972 C -0.016 0.814 0 0.651 0.062 0.502 C 0.123 0.353 0.228 0.226 0.361 0.137 C 0.495 0.048 0.652 0 0.813 0 C 0.92 0 1.026 0.021 1.124 0.062 C 1.223 0.103 1.313 0.163 1.388 0.238 C 1.464 0.314 1.524 0.403 1.565 0.502 C 1.605 0.601 1.627 0.706 1.627 0.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.898,
    height: 13.919,
    viewBox: "0 0 19.898 13.919",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.984,
      top: 7.969,
      width: 19.898,
      height: 13.919,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.486 2.172 C 19.26 1.316 18.582 0.638 17.726 0.413 C 16.177 0 9.949 0 9.949 0 C 9.949 0 3.721 0 2.172 0.413 C 1.316 0.638 0.638 1.316 0.413 2.172 C 0 3.721 0 6.96 0 6.96 C 0 6.96 0 10.198 0.413 11.747 C 0.638 12.604 1.316 13.281 2.172 13.507 C 3.721 13.919 9.949 13.919 9.949 13.919 C 9.949 13.919 16.177 13.919 17.726 13.507 C 18.582 13.281 19.26 12.604 19.486 11.747 C 19.898 10.198 19.898 6.96 19.898 6.96 C 19.898 6.96 19.898 3.721 19.486 2.172 Z M 7.956 9.949 L 7.956 3.978 L 13.125 6.967 L 7.956 9.957 L 7.956 9.949 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.686,
      top: 6.667,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.029,
    height: 14.993,
    viewBox: "0 0 13.029 14.993",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.485,
      top: 0.502,
      width: 13.029,
      height: 14.993,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.843 0.013 C 7.661 0 8.474 0.007 9.286 0 C 9.313 1.015 9.725 1.93 10.38 2.607 L 10.379 2.606 C 11.085 3.241 12.003 3.653 13.015 3.723 L 13.029 3.724 L 13.029 6.242 C 12.073 6.218 11.174 5.998 10.363 5.619 L 10.404 5.635 C 10.012 5.447 9.681 5.254 9.366 5.038 L 9.392 5.055 C 9.386 6.879 9.398 8.704 9.379 10.522 C 9.328 11.448 9.02 12.293 8.526 12.998 L 8.536 12.983 C 7.71 14.166 6.372 14.943 4.85 14.989 L 4.843 14.989 C 4.782 14.992 4.709 14.993 4.636 14.993 C 3.771 14.993 2.963 14.752 2.274 14.333 L 2.294 14.345 C 1.04 13.59 0.175 12.3 0.015 10.798 L 0.013 10.778 C 0 10.465 -0.006 10.153 0.007 9.847 C 0.252 7.457 2.254 5.609 4.687 5.609 C 4.961 5.609 5.229 5.632 5.489 5.677 L 5.461 5.673 C 5.474 6.597 5.436 7.522 5.436 8.446 C 5.225 8.37 4.981 8.326 4.726 8.326 C 3.792 8.326 2.998 8.923 2.704 9.756 L 2.699 9.771 C 2.633 9.984 2.594 10.23 2.594 10.484 C 2.594 10.587 2.601 10.689 2.613 10.789 L 2.612 10.777 C 2.778 11.8 3.655 12.572 4.712 12.572 C 4.743 12.572 4.773 12.571 4.803 12.57 L 4.798 12.57 C 5.53 12.548 6.165 12.155 6.524 11.573 L 6.529 11.564 C 6.662 11.378 6.754 11.153 6.784 10.908 L 6.785 10.901 C 6.847 9.783 6.822 8.671 6.828 7.552 C 6.834 5.035 6.822 2.523 6.841 0.011 L 6.843 0.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Solutions"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Support"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "About"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Nayax \xA9 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-5rem-2) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Anti-Money Laundering and KYC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Code of Ethics")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: 8.545417785644531,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.057,
      top: 4.767,
      width: 21.522,
      height: 6.593,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.829,
    height: 6.387,
    viewBox: "0 0 2.829 6.387",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.602,
      top: 0.131,
      width: 2.829,
      height: 6.387,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.387 L 1.089 0 L 2.829 0 L 1.74 6.387 L 0 6.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.224,
    height: 6.593,
    viewBox: "0 0 5.224 6.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.408,
      top: 0,
      width: 5.224,
      height: 6.593,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.224 0.268 C 4.879 0.139 4.339 0 3.664 0 C 1.943 0 0.732 0.866 0.721 2.108 C 0.712 3.026 1.586 3.538 2.247 3.843 C 2.924 4.156 3.152 4.356 3.149 4.636 C 3.145 5.064 2.608 5.259 2.107 5.259 C 1.411 5.259 1.04 5.162 0.469 4.924 L 0.244 4.822 L 0 6.252 C 0.407 6.431 1.159 6.585 1.939 6.593 C 3.769 6.593 4.957 5.737 4.971 4.411 C 4.978 3.684 4.514 3.131 3.509 2.675 C 2.901 2.38 2.528 2.183 2.532 1.884 C 2.532 1.618 2.847 1.334 3.529 1.334 C 4.098 1.325 4.511 1.45 4.832 1.579 L 4.988 1.653 L 5.224 0.268 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.252,
    height: 6.383,
    viewBox: "0 0 6.252 6.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.27,
      top: 0.131,
      width: 6.252,
      height: 6.383,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.843 0 L 3.497 0 C 3.081 0 2.769 0.114 2.586 0.53 L 0 6.383 L 1.828 6.383 C 1.828 6.383 2.127 5.596 2.195 5.423 C 2.395 5.423 4.17 5.426 4.424 5.426 C 4.476 5.65 4.636 6.383 4.636 6.383 L 6.252 6.383 L 4.843 0 Z M 2.708 4.124 C 2.852 3.756 3.402 2.339 3.402 2.339 C 3.391 2.356 3.545 1.969 3.633 1.729 L 3.75 2.28 C 3.75 2.28 4.084 3.805 4.153 4.124 L 2.708 4.124 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.141,
    height: 6.377,
    viewBox: "0 0 6.141 6.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.827,
      top: 0.131,
      width: 6.141,
      height: 6.377,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.297 0 L 2.593 4.356 L 2.411 3.471 C 2.094 2.45 1.105 1.345 0 0.791 L 1.559 6.377 L 3.401 6.375 L 6.141 0 L 4.297 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.229,
    height: 3.474,
    viewBox: "0 0 4.229 3.474",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.131,
      width: 4.229,
      height: 3.474,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.83 0 L 0.022 0 L 0 0.133 C 2.184 0.662 3.629 1.939 4.229 3.474 L 3.619 0.539 C 3.513 0.135 3.208 0.014 2.83 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 25.637,
    height: 17.804,
    viewBox: "0 0 25.637 17.804",
    fill: "none",
    style: {
      position: "relative",
      width: 25.637,
      height: 17.804,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.494 15.724 C 21.494 16.027 21.289 16.245 20.995 16.245 C 20.692 16.245 20.497 16.014 20.497 15.724 C 20.497 15.435 20.692 15.204 20.995 15.204 C 21.289 15.204 21.494 15.435 21.494 15.724 Z M 7.66 15.204 C 7.344 15.204 7.162 15.435 7.162 15.724 C 7.162 16.014 7.345 16.245 7.66 16.245 C 7.95 16.245 8.145 16.027 8.145 15.724 C 8.14 15.435 7.95 15.204 7.66 15.204 Z M 12.89 15.191 C 12.65 15.191 12.502 15.346 12.467 15.578 L 13.317 15.578 C 13.277 15.324 13.122 15.191 12.89 15.191 Z M 17.688 15.204 C 17.385 15.204 17.204 15.435 17.204 15.724 C 17.204 16.014 17.386 16.245 17.688 16.245 C 17.991 16.245 18.187 16.027 18.187 15.724 C 18.187 15.435 17.99 15.204 17.688 15.204 Z M 22.401 16.365 C 22.401 16.379 22.415 16.388 22.415 16.414 C 22.415 16.428 22.401 16.437 22.401 16.463 C 22.388 16.477 22.388 16.485 22.379 16.498 C 22.365 16.512 22.356 16.521 22.33 16.521 C 22.316 16.534 22.308 16.534 22.281 16.534 C 22.267 16.534 22.259 16.534 22.232 16.521 C 22.219 16.521 22.21 16.507 22.197 16.498 C 22.183 16.485 22.175 16.476 22.175 16.463 C 22.161 16.441 22.161 16.428 22.161 16.414 C 22.161 16.392 22.161 16.379 22.175 16.365 C 22.175 16.343 22.188 16.33 22.197 16.316 C 22.211 16.303 22.219 16.303 22.232 16.294 C 22.255 16.28 22.267 16.28 22.281 16.28 C 22.304 16.28 22.316 16.28 22.33 16.294 C 22.352 16.307 22.365 16.307 22.379 16.316 C 22.392 16.326 22.388 16.343 22.401 16.365 Z M 22.304 16.428 C 22.326 16.428 22.326 16.414 22.339 16.414 C 22.352 16.401 22.352 16.392 22.352 16.379 C 22.352 16.366 22.352 16.356 22.339 16.344 C 22.326 16.344 22.316 16.33 22.29 16.33 L 22.219 16.33 L 22.219 16.485 L 22.254 16.485 L 22.254 16.423 L 22.267 16.423 L 22.316 16.485 L 22.352 16.485 L 22.304 16.428 Z M 25.637 2.137 L 25.637 15.667 C 25.637 16.846 24.681 17.804 23.5 17.804 L 2.137 17.804 C 0.957 17.804 0 16.847 0 15.667 L 0 2.137 C 0 0.957 0.957 0 2.137 0 L 23.5 0 C 24.68 0 25.637 0.957 25.637 2.137 Z M 2.85 7.281 C 2.85 10.686 5.614 13.445 9.014 13.445 C 10.224 13.445 11.412 13.08 12.418 12.417 C 9.174 9.778 9.196 4.798 12.418 2.158 C 11.412 1.491 10.224 1.13 9.014 1.13 C 5.614 1.126 2.85 3.889 2.85 7.281 Z M 12.819 12.124 C 15.957 9.676 15.943 4.905 12.819 2.444 C 9.695 4.905 9.681 9.681 12.819 12.124 Z M 6.485 15.52 C 6.485 15.133 6.231 14.879 5.831 14.866 C 5.626 14.866 5.408 14.928 5.261 15.155 C 5.154 14.972 4.972 14.866 4.718 14.866 C 4.549 14.866 4.38 14.928 4.246 15.106 L 4.246 14.91 L 3.881 14.91 L 3.881 16.544 L 4.246 16.544 C 4.246 15.703 4.135 15.2 4.647 15.2 C 5.101 15.2 5.012 15.654 5.012 16.544 L 5.364 16.544 C 5.364 15.729 5.252 15.2 5.764 15.2 C 6.218 15.2 6.129 15.645 6.129 16.544 L 6.494 16.544 L 6.494 15.52 L 6.485 15.52 Z M 8.484 14.91 L 8.132 14.91 L 8.132 15.106 C 8.012 14.959 7.843 14.866 7.612 14.866 C 7.153 14.866 6.802 15.231 6.802 15.724 C 6.802 16.223 7.153 16.583 7.612 16.583 C 7.843 16.583 8.012 16.498 8.132 16.343 L 8.132 16.548 L 8.484 16.548 L 8.484 14.91 Z M 10.287 16.05 C 10.287 15.382 9.268 15.684 9.268 15.373 C 9.268 15.119 9.797 15.16 10.091 15.324 L 10.238 15.035 C 9.819 14.763 8.893 14.768 8.893 15.4 C 8.893 16.036 9.912 15.769 9.912 16.067 C 9.912 16.348 9.312 16.325 8.991 16.103 L 8.836 16.383 C 9.334 16.721 10.287 16.65 10.287 16.05 Z M 11.862 16.463 L 11.765 16.16 C 11.596 16.253 11.221 16.356 11.221 15.978 L 11.221 15.239 L 11.805 15.239 L 11.805 14.91 L 11.221 14.91 L 11.221 14.411 L 10.856 14.411 L 10.856 14.91 L 10.518 14.91 L 10.518 15.235 L 10.856 15.235 L 10.856 15.978 C 10.856 16.762 11.626 16.619 11.862 16.463 Z M 12.454 15.867 L 13.678 15.867 C 13.678 15.146 13.348 14.861 12.903 14.861 C 12.431 14.861 12.093 15.212 12.093 15.72 C 12.093 16.632 13.099 16.783 13.598 16.352 L 13.429 16.085 C 13.082 16.37 12.556 16.343 12.454 15.867 Z M 15.085 14.91 C 14.88 14.821 14.569 14.83 14.408 15.106 L 14.408 14.91 L 14.043 14.91 L 14.043 16.544 L 14.408 16.544 L 14.408 15.623 C 14.408 15.106 14.831 15.173 14.978 15.248 L 15.085 14.91 Z M 15.556 15.724 C 15.556 15.216 16.073 15.052 16.478 15.35 L 16.647 15.061 C 16.13 14.656 15.191 14.878 15.191 15.728 C 15.191 16.61 16.188 16.787 16.647 16.396 L 16.478 16.107 C 16.068 16.396 15.556 16.223 15.556 15.724 Z M 18.525 14.91 L 18.159 14.91 L 18.159 15.106 C 17.79 14.616 16.829 14.893 16.829 15.724 C 16.829 16.579 17.825 16.824 18.159 16.343 L 18.159 16.548 L 18.525 16.548 L 18.525 14.91 Z M 20.024 14.91 C 19.918 14.857 19.535 14.781 19.348 15.106 L 19.348 14.91 L 18.996 14.91 L 18.996 16.544 L 19.348 16.544 L 19.348 15.623 C 19.348 15.133 19.749 15.164 19.918 15.248 L 20.024 14.91 Z M 21.818 14.247 L 21.466 14.247 L 21.466 15.106 C 21.101 14.621 20.136 14.879 20.136 15.724 C 20.136 16.588 21.137 16.819 21.466 16.343 L 21.466 16.548 L 21.818 16.548 L 21.818 14.247 Z M 22.157 10.905 L 22.157 11.11 L 22.192 11.11 L 22.192 10.905 L 22.276 10.905 L 22.276 10.87 L 22.071 10.87 L 22.071 10.905 L 22.157 10.905 Z M 22.45 16.414 C 22.45 16.392 22.45 16.365 22.437 16.343 C 22.424 16.329 22.415 16.308 22.402 16.294 C 22.389 16.28 22.367 16.272 22.353 16.259 C 22.331 16.259 22.304 16.245 22.282 16.245 C 22.268 16.245 22.247 16.259 22.219 16.259 C 22.197 16.272 22.184 16.281 22.171 16.294 C 22.148 16.307 22.135 16.329 22.135 16.343 C 22.122 16.365 22.122 16.392 22.122 16.414 C 22.122 16.428 22.122 16.449 22.135 16.477 C 22.135 16.49 22.149 16.512 22.171 16.526 C 22.183 16.539 22.193 16.548 22.219 16.561 C 22.242 16.574 22.268 16.574 22.282 16.574 C 22.304 16.574 22.331 16.574 22.353 16.561 C 22.367 16.547 22.388 16.538 22.402 16.526 C 22.416 16.513 22.425 16.49 22.437 16.477 C 22.45 16.45 22.45 16.428 22.45 16.414 Z M 22.593 10.865 L 22.53 10.865 L 22.459 11.02 L 22.388 10.865 L 22.325 10.865 L 22.325 11.105 L 22.36 11.105 L 22.36 10.922 L 22.432 11.078 L 22.481 11.078 L 22.543 10.922 L 22.543 11.105 L 22.592 11.105 L 22.593 10.865 Z M 22.788 7.281 C 22.788 3.889 20.024 1.126 16.624 1.126 C 15.414 1.126 14.226 1.491 13.219 2.154 C 16.429 4.794 16.478 9.787 13.219 12.413 C 14.226 13.081 15.423 13.441 16.624 13.441 C 20.024 13.446 22.788 10.686 22.788 7.281 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.957,
      top: 3.753,
      width: 23.72,
      height: 8.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.620,
    height: 3.877,
    viewBox: "0 0 22.620 3.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.62,
      height: 3.877,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.875 L 1.139 3.875 L 1.396 3.258 L 1.971 3.258 L 2.228 3.875 L 4.469 3.875 L 4.469 3.403 L 4.67 3.877 L 5.833 3.877 L 6.033 3.396 L 6.033 3.875 L 11.605 3.875 L 11.602 2.862 L 11.71 2.862 C 11.785 2.864 11.807 2.871 11.807 2.995 L 11.807 3.875 L 14.689 3.875 L 14.689 3.639 C 14.921 3.763 15.283 3.875 15.758 3.875 L 16.97 3.875 L 17.23 3.258 L 17.805 3.258 L 18.059 3.875 L 20.395 3.875 L 20.395 3.288 L 20.748 3.875 L 22.62 3.875 L 22.62 0 L 20.768 0 L 20.768 0.458 L 20.508 0 L 18.607 0 L 18.607 0.458 L 18.369 0 L 15.801 0 C 15.372 0 14.994 0.06 14.689 0.226 L 14.689 0 L 12.917 0 L 12.917 0.226 C 12.722 0.055 12.458 0 12.164 0 L 5.69 0 L 5.256 1.001 L 4.81 0 L 2.771 0 L 2.771 0.458 L 2.547 0 L 0.808 0 L 0 1.842 L 0 3.875 L 0 3.875 Z M 7.192 3.316 L 6.508 3.316 L 6.506 1.14 L 5.539 3.316 L 4.953 3.316 L 3.984 1.138 L 3.984 3.316 L 2.628 3.316 L 2.371 2.696 L 0.983 2.696 L 0.724 3.316 L 0 3.316 L 1.194 0.538 L 2.185 0.538 L 3.319 3.168 L 3.319 0.538 L 4.407 0.538 L 5.28 2.422 L 6.082 0.538 L 7.192 0.538 L 7.192 3.316 L 7.192 3.316 Z M 2.144 2.119 L 1.687 1.012 L 1.233 2.119 L 2.144 2.119 Z M 9.913 3.316 L 7.685 3.316 L 7.685 0.538 L 9.913 0.538 L 9.913 1.116 L 8.352 1.116 L 8.352 1.617 L 9.875 1.617 L 9.875 2.186 L 8.352 2.186 L 8.352 2.741 L 9.913 2.741 L 9.913 3.316 Z M 13.052 1.286 C 13.052 1.729 12.755 1.958 12.582 2.026 C 12.728 2.082 12.852 2.179 12.912 2.26 C 13.006 2.398 13.022 2.522 13.022 2.77 L 13.022 3.316 L 12.35 3.316 L 12.347 2.965 C 12.347 2.798 12.363 2.558 12.242 2.424 C 12.144 2.326 11.996 2.305 11.756 2.305 L 11.04 2.305 L 11.04 3.316 L 10.373 3.316 L 10.373 0.538 L 11.907 0.538 C 12.248 0.538 12.499 0.547 12.714 0.671 C 12.925 0.795 13.052 0.976 13.052 1.286 Z M 12.209 1.698 C 12.117 1.754 12.009 1.756 11.879 1.756 L 11.069 1.756 L 11.069 1.139 L 11.89 1.139 C 12.006 1.139 12.127 1.144 12.206 1.189 C 12.293 1.229 12.346 1.315 12.346 1.434 C 12.346 1.556 12.295 1.653 12.209 1.698 Z M 14.121 3.316 L 13.441 3.316 L 13.441 0.538 L 14.121 0.538 L 14.121 3.316 Z M 22.02 3.316 L 21.075 3.316 L 19.811 1.231 L 19.811 3.316 L 18.453 3.316 L 18.193 2.696 L 16.808 2.696 L 16.556 3.316 L 15.776 3.316 C 15.452 3.316 15.041 3.244 14.809 3.008 C 14.575 2.773 14.453 2.453 14.453 1.948 C 14.453 1.536 14.526 1.159 14.812 0.862 C 15.028 0.64 15.365 0.538 15.825 0.538 L 16.471 0.538 L 16.471 1.133 L 15.838 1.133 C 15.595 1.133 15.458 1.169 15.325 1.297 C 15.212 1.414 15.134 1.636 15.134 1.927 C 15.134 2.224 15.193 2.439 15.317 2.579 C 15.42 2.689 15.606 2.722 15.782 2.722 L 16.081 2.722 L 17.021 0.538 L 18.02 0.538 L 19.149 3.165 L 19.149 0.538 L 20.165 0.538 L 21.337 2.472 L 21.337 0.538 L 22.02 0.538 L 22.02 3.316 Z M 17.966 2.119 L 17.505 1.012 L 17.046 2.119 L 17.966 2.119 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.008,
    height: 3.879,
    viewBox: "0 0 19.008 3.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.712,
      top: 4.775,
      width: 19.008,
      height: 3.879,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.007 2.976 C 18.845 3.212 18.529 3.331 18.102 3.331 L 16.814 3.331 L 16.814 2.736 L 18.097 2.736 C 18.224 2.736 18.313 2.719 18.367 2.667 C 18.413 2.624 18.445 2.561 18.445 2.486 C 18.445 2.405 18.413 2.34 18.364 2.302 C 18.316 2.259 18.245 2.24 18.129 2.24 C 17.503 2.219 16.722 2.259 16.722 1.38 C 16.722 0.977 16.979 0.553 17.678 0.553 L 19.007 0.553 L 19.007 0 L 17.773 0 C 17.4 0 17.13 0.089 16.938 0.227 L 16.938 0 L 15.113 0 C 14.821 0 14.478 0.072 14.316 0.227 L 14.316 0 L 11.056 0 L 11.056 0.227 C 10.797 0.041 10.359 0 10.157 0 L 8.007 0 L 8.007 0.227 C 7.802 0.029 7.345 0 7.067 0 L 4.661 0 L 4.11 0.593 L 3.595 0 L 0 0 L 0 3.877 L 3.527 3.877 L 4.094 3.274 L 4.629 3.877 L 6.803 3.879 L 6.803 2.967 L 7.017 2.967 C 7.305 2.972 7.645 2.96 7.945 2.831 L 7.945 3.877 L 9.739 3.877 L 9.739 2.867 L 9.825 2.867 C 9.935 2.867 9.946 2.871 9.946 2.981 L 9.946 3.877 L 15.394 3.877 C 15.739 3.877 16.101 3.789 16.301 3.629 L 16.301 3.877 L 18.029 3.877 C 18.388 3.877 18.74 3.827 19.007 3.698 L 19.007 2.976 Z M 8.206 1.485 C 8.206 2.257 7.628 2.416 7.045 2.416 L 6.213 2.416 L 6.213 3.348 L 4.917 3.348 L 4.096 2.428 L 3.242 3.348 L 0.601 3.348 L 0.601 0.569 L 3.283 0.569 L 4.103 1.48 L 4.951 0.569 L 7.082 0.569 C 7.611 0.569 8.206 0.715 8.206 1.485 Z M 2.905 2.763 L 1.265 2.763 L 1.265 2.211 L 2.729 2.211 L 2.729 1.644 L 1.265 1.644 L 1.265 1.139 L 2.937 1.139 L 3.666 1.948 L 2.905 2.763 Z M 5.546 3.082 L 4.522 1.95 L 5.546 0.854 L 5.546 3.082 Z M 7.06 1.846 L 6.199 1.846 L 6.199 1.139 L 7.068 1.139 C 7.309 1.139 7.476 1.236 7.476 1.479 C 7.476 1.72 7.317 1.846 7.06 1.846 Z M 11.575 0.569 L 13.8 0.569 L 13.8 1.144 L 12.239 1.144 L 12.239 1.649 L 13.762 1.649 L 13.762 2.216 L 12.239 2.216 L 12.239 2.769 L 13.8 2.771 L 13.8 3.348 L 11.575 3.348 L 11.575 0.569 Z M 10.719 2.057 C 10.868 2.111 10.989 2.209 11.046 2.29 C 11.14 2.426 11.154 2.552 11.156 2.797 L 11.156 3.348 L 10.487 3.348 L 10.487 3 C 10.487 2.833 10.503 2.586 10.379 2.456 C 10.282 2.357 10.133 2.333 9.89 2.333 L 9.177 2.333 L 9.177 3.348 L 8.507 3.348 L 8.507 0.569 L 10.047 0.569 C 10.384 0.569 10.63 0.584 10.849 0.7 C 11.06 0.827 11.192 1 11.192 1.317 C 11.192 1.761 10.895 1.987 10.719 2.057 Z M 10.342 1.705 C 10.253 1.758 10.143 1.763 10.013 1.763 L 9.203 1.763 L 9.203 1.139 L 10.024 1.139 C 10.143 1.139 10.262 1.141 10.342 1.189 C 10.429 1.234 10.48 1.32 10.48 1.439 C 10.48 1.558 10.429 1.653 10.342 1.705 Z M 16.362 1.882 C 16.492 2.016 16.562 2.185 16.562 2.471 C 16.562 3.069 16.186 3.348 15.514 3.348 L 14.215 3.348 L 14.215 2.752 L 15.509 2.752 C 15.635 2.752 15.725 2.735 15.781 2.683 C 15.827 2.64 15.86 2.578 15.86 2.502 C 15.86 2.421 15.824 2.357 15.779 2.318 C 15.728 2.276 15.657 2.257 15.541 2.257 C 14.917 2.235 14.137 2.276 14.137 1.397 C 14.137 0.993 14.391 0.569 15.09 0.569 L 16.427 0.569 L 16.427 1.161 L 15.203 1.161 C 15.082 1.161 15.003 1.165 14.936 1.211 C 14.863 1.256 14.836 1.323 14.836 1.411 C 14.836 1.516 14.898 1.587 14.982 1.618 C 15.052 1.642 15.128 1.649 15.242 1.649 L 15.601 1.659 C 15.963 1.668 16.211 1.73 16.362 1.882 Z M 19.008 1.139 L 17.793 1.139 C 17.672 1.139 17.591 1.143 17.523 1.189 C 17.453 1.234 17.426 1.3 17.426 1.389 C 17.426 1.493 17.485 1.565 17.571 1.596 C 17.642 1.62 17.717 1.627 17.828 1.627 L 18.19 1.637 C 18.554 1.646 18.798 1.708 18.946 1.86 C 18.973 1.882 18.99 1.905 19.008 1.929 L 19.008 1.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e8329a5d46a21c6f-f3d97af6",
    style: {
      position: "relative",
      width: 20.295,
      height: 14.965,
      mixBlendMode: "lighten",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-766c0bac5f158721-d965af24",
    style: {
      position: "relative",
      width: 25.636,
      height: 15.713,
      borderRadius: 2.4233274459838867,
      boxShadow: "inset 0 0 0 1.068px var(--stroke-action-inverted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ff756ba7b5fbe6f3",
    style: {
      position: "relative",
      width: 22.432,
      height: 15.903,
      flexShrink: 0
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 360,
      backgroundColor: "rgb(38,38,38)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      padding: "40px 16px 32px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--icon-inverted-default) * 1px)",
      paddingRight: "calc(var(--text-base-default) * 1px)",
      paddingBottom: "calc(var(--action-highlight-default) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 56,
      lineHeight: "64px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255,255,255)"
    }
  }, "Keep yourself "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255,255,255)"
    }
  }, "updated")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Join our VIP mailing list and get exclusive updates and promotions as soon as they are released")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--icon-inverted-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10000000,
      boxShadow: "inset 0 0 0 1px var(--stroke-error-inverted)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingRight: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "‘!”."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--action-highlight-default)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.ArrowRight, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10000000,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--0-5rem-2) * 1px)",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingRight: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.ArrowRight2, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: -9,
      backgroundColor: "var(--surface-inverted-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, props.text3 ?? "Email address")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 58,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "var(--text-error-inverted)"
    }
  }, props.text4 ?? "Email must include an ‘@’ and a domain (e.g. name@email.com). ")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Your information will be processed in accordance with our Privacy Policy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--icon-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 90,
      height: 36,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.117,
      top: 7.014,
      width: 90.191,
      height: 25.226,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.597,
    height: 16.984,
    viewBox: "0 0 15.597 16.984",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.569,
      top: 4.97,
      width: 15.597,
      height: 16.984,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.31 0 C 3.086 0 0 3.802 0 8.493 C 0 13.183 2.961 16.984 8.31 16.984 C 12.899 16.984 15.597 12.799 15.597 8.109 C 15.597 4.924 13.418 0 8.31 0 Z M 8.31 12.92 C 5.316 12.92 3.976 10.938 3.976 8.492 C 3.976 6.045 5.377 4.063 8.31 4.063 C 11.076 4.063 12.643 6.045 12.643 8.492 C 12.643 10.938 11.2 12.92 8.31 12.92 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.823,
    height: 21.501,
    viewBox: "0 0 18.823 21.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.823,
      height: 21.501,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.298 0 L 14.298 13.433 L 4.161 0 L 0 0 L 0 21.501 L 4.524 21.501 L 4.524 7.817 L 12.546 18.284 C 14.673 17.23 16.918 16.277 18.504 15.805 L 18.823 15.71 L 18.823 0 L 14.299 0 L 14.298 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.689,
    height: 4.578,
    viewBox: "0 0 9.689 4.578",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.135,
      top: 16.922,
      width: 9.689,
      height: 4.578,
      color: "rgb(255,205,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.688 4.578 L 9.688 0 C 7.21 0.739 3.047 2.7 0.416 4.316 C 0.323 4.374 0.23 4.431 0.141 4.488 C 0.093 4.519 0.046 4.548 0 4.578 L 9.689 4.578 L 9.688 4.578 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.275,
    height: 16.531,
    viewBox: "0 0 16.275 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 73.916,
      top: 4.97,
      width: 16.275,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.275 0 L 11.327 0 L 8.329 4.687 L 4.947 0 L 0 0 L 5.855 8.265 L 0.766 16.531 L 5.714 16.531 L 8.329 12.002 L 11.327 16.531 L 16.275 16.531 L 10.803 8.265 L 16.275 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.754,
    height: 20.256,
    viewBox: "0 0 17.754 20.256",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.546,
      top: 4.97,
      width: 17.754,
      height: 20.256,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.103 0 L 8.965 9.909 L 4.76 0 L 0 0 L 6.789 15.121 L 4.644 20.256 L 8.972 20.256 L 17.754 0 L 13.103 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.934,
    height: 16.531,
    viewBox: "0 0 3.934 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.504,
      top: 4.97,
      width: 3.934,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.484 16.531 L 3.934 16.531 L 3.934 0 L 0.484 0 L 0 2.922 L 0 13.511 L 0.484 16.531 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.597,
    height: 16.984,
    viewBox: "0 0 15.597 16.984",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.632,
      top: 4.97,
      width: 15.597,
      height: 16.984,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.31 0 C 3.086 0 0 3.802 0 8.493 C 0 13.183 2.961 16.984 8.31 16.984 C 12.899 16.984 15.597 12.799 15.597 8.109 C 15.597 4.924 13.418 0 8.31 0 Z M 8.31 12.92 C 5.316 12.92 3.976 10.938 3.976 8.492 C 3.976 6.045 5.377 4.063 8.31 4.063 C 11.076 4.063 12.643 6.045 12.643 8.492 C 12.643 10.938 11.2 12.92 8.31 12.92 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.935,
    height: 16.531,
    viewBox: "0 0 3.935 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 68.566,
      top: 4.97,
      width: 3.935,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.485 16.531 L 3.935 16.531 L 3.935 0 L 0.485 0 L 0 2.922 L 0 13.511 L 0.485 16.531 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "23px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We are a leading global provider of EMV certified cashless payment solutions, telemetry system, and a management & monitoring business suite for the unattended machine industry."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.Location, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 39,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "US"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      transform: "matrix(0,1,-1,0,39,0)",
      transformOrigin: "0 0",
      color: "var(--icon-inverted-default)"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.ChevronDown, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Executive Plaza 1, 11350\nMccormick Road, Hunt Valley,  Maryland 21031"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Phone, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "(410) 666-3800"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 30,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.938,
      top: 6.961,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.562644958496094,
      height: 16.267230987548828,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.561,
    height: 16.262,
    viewBox: "0 0 8.561 16.262",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.817 4.27 L 5.817 6.072 L 8.561 6.072 L 8.119 9.079 L 5.817 9.079 L 5.817 16.175 C 5.351 16.233 4.881 16.262 4.411 16.262 C 3.814 16.263 3.218 16.217 2.628 16.126 L 2.628 9.084 L 0 9.084 L 0.052 6.072 L 2.628 6.072 L 2.628 3.477 C 2.628 1.549 4.363 -0.724 8.561 0.221 L 8.561 2.746 L 7.287 2.769 C 7.089 2.762 6.893 2.797 6.709 2.871 C 6.526 2.944 6.36 3.055 6.222 3.196 C 6.084 3.337 5.977 3.506 5.907 3.69 C 5.837 3.875 5.807 4.072 5.817 4.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 16.046,
    height: 16.405,
    viewBox: "0 0 16.046 16.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.789,
      top: 6.781,
      width: 16.046,
      height: 16.405,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.546 6.948 L 15.519 0 L 14.105 0 L 8.919 6.032 L 4.778 0 L 0 0 L 6.271 9.118 L 0 16.405 L 1.414 16.405 L 6.888 10.034 L 11.268 16.405 L 16.046 16.405 L 9.546 6.948 Z M 7.605 9.208 L 6.968 8.302 L 1.921 1.065 L 4.091 1.065 L 8.172 6.898 L 8.81 7.804 L 14.105 15.379 L 11.935 15.379 L 7.605 9.208 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.961,
      top: 6.961,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416336059570312,
      height: 13.302857398986816,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.404,
      height: 13.305,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.237,
    height: 3.237,
    viewBox: "0 0 3.237 3.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.237,
      height: 3.237,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.237 1.619 C 3.237 1.939 3.142 2.252 2.964 2.518 C 2.786 2.784 2.534 2.991 2.238 3.114 C 1.942 3.236 1.617 3.268 1.303 3.206 C 0.989 3.144 0.7 2.989 0.474 2.763 C 0.248 2.537 0.094 2.248 0.031 1.934 C -0.031 1.62 0.001 1.295 0.123 0.999 C 0.246 0.703 0.453 0.451 0.719 0.273 C 0.986 0.095 1.298 0 1.619 0 C 2.048 0 2.46 0.171 2.763 0.474 C 3.067 0.778 3.237 1.189 3.237 1.619 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.722,
    height: 8.923,
    viewBox: "0 0 2.722 8.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.258,
      top: 4.375,
      width: 2.722,
      height: 8.923,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.722 0 L 0 0 L 0 8.923 L 2.722 8.923 L 2.722 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.740,
    height: 9.180,
    viewBox: "0 0 8.740 9.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.664,
      top: 4.125,
      width: 8.74,
      height: 9.18,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.695 1.49 L 2.695 0.253 L 0 0.253 L 0 9.176 L 2.695 9.176 L 2.695 5.65 C 2.695 4.123 2.899 3.393 3.267 2.992 L 3.289 2.97 C 3.421 2.82 3.582 2.699 3.762 2.613 C 3.942 2.527 4.137 2.478 4.336 2.469 C 4.536 2.46 4.735 2.49 4.922 2.559 C 5.109 2.628 5.28 2.734 5.426 2.87 C 5.734 3.259 5.888 3.749 5.858 4.245 L 5.858 9.18 L 8.74 9.18 L 8.74 4.476 C 8.74 1.091 7.479 0.164 5.845 0.039 L 5.703 0.028 C 5.113 -0.053 4.512 0.043 3.977 0.303 C 3.441 0.563 2.995 0.976 2.695 1.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.008,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.961,
      top: 7.969,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.332720756530762,
      height: 13.33371639251709,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.894,
    height: 6.894,
    viewBox: "0 0 6.894 6.894",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.219,
      top: 3.219,
      width: 6.894,
      height: 6.894,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.448 1.227 C 3.887 1.227 4.316 1.358 4.681 1.601 C 5.046 1.845 5.331 2.192 5.499 2.598 C 5.667 3.003 5.711 3.45 5.625 3.88 C 5.54 4.311 5.328 4.706 5.018 5.017 C 4.707 5.327 4.312 5.539 3.881 5.624 C 3.451 5.71 3.004 5.666 2.599 5.498 C 2.193 5.33 1.846 5.045 1.602 4.68 C 1.359 4.315 1.228 3.886 1.228 3.447 C 1.228 2.858 1.462 2.294 1.879 1.878 C 2.295 1.461 2.859 1.227 3.448 1.227 Z M 3.448 0 C 2.766 0 2.1 0.202 1.533 0.581 C 0.966 0.959 0.524 1.498 0.263 2.128 C 0.002 2.757 -0.067 3.451 0.066 4.119 C 0.199 4.788 0.527 5.403 1.01 5.885 C 1.492 6.367 2.106 6.695 2.775 6.828 C 3.444 6.961 4.137 6.893 4.767 6.632 C 5.397 6.371 5.935 5.929 6.314 5.362 C 6.692 4.795 6.895 4.128 6.894 3.446 C 6.893 2.533 6.53 1.657 5.884 1.011 C 5.238 0.364 4.362 0.001 3.448 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.333,
    height: 13.329,
    viewBox: "0 0 13.333 13.329",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.605 1.227 C 9.933 1.227 10.259 1.292 10.562 1.418 C 10.865 1.544 11.141 1.728 11.373 1.96 C 11.606 2.192 11.79 2.468 11.915 2.772 C 12.041 3.075 12.105 3.4 12.105 3.729 L 12.105 9.602 C 12.105 9.93 12.041 10.256 11.915 10.559 C 11.79 10.863 11.606 11.138 11.373 11.371 C 11.141 11.603 10.865 11.787 10.562 11.913 C 10.259 12.039 9.933 12.103 9.605 12.103 L 3.732 12.103 C 3.403 12.104 3.078 12.04 2.774 11.914 C 2.471 11.789 2.195 11.605 1.962 11.373 C 1.73 11.142 1.545 10.866 1.419 10.563 C 1.293 10.259 1.228 9.934 1.227 9.606 L 1.227 3.733 C 1.227 3.404 1.291 3.078 1.416 2.774 C 1.542 2.47 1.726 2.194 1.958 1.961 C 2.19 1.729 2.466 1.544 2.77 1.418 C 3.074 1.292 3.399 1.227 3.728 1.227 L 9.605 1.227 Z M 9.605 0 L 3.732 0 C 2.743 0 1.794 0.393 1.094 1.092 C 0.395 1.791 0.001 2.739 0 3.728 L 0 9.601 C 0.001 10.589 0.394 11.537 1.093 12.236 C 1.792 12.935 2.739 13.328 3.728 13.329 L 9.601 13.329 C 10.589 13.329 11.537 12.937 12.237 12.239 C 12.936 11.541 13.33 10.594 13.333 9.606 L 13.333 3.733 C 13.333 2.744 12.94 1.795 12.241 1.095 C 11.542 0.395 10.594 0.001 9.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.627,
    height: 1.627,
    viewBox: "0 0 1.627 1.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.469,
      top: 2.226,
      width: 1.627,
      height: 1.627,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.627 0.813 C 1.627 0.974 1.579 1.131 1.489 1.265 C 1.4 1.399 1.273 1.503 1.124 1.565 C 0.976 1.626 0.812 1.642 0.655 1.611 C 0.497 1.58 0.352 1.502 0.238 1.388 C 0.124 1.275 0.047 1.13 0.016 0.972 C -0.016 0.814 0 0.651 0.062 0.502 C 0.123 0.353 0.228 0.226 0.361 0.137 C 0.495 0.048 0.652 0 0.813 0 C 0.92 0 1.026 0.021 1.124 0.062 C 1.223 0.103 1.313 0.163 1.388 0.238 C 1.464 0.314 1.524 0.403 1.565 0.502 C 1.605 0.601 1.627 0.706 1.627 0.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.898,
    height: 13.919,
    viewBox: "0 0 19.898 13.919",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.984,
      top: 7.969,
      width: 19.898,
      height: 13.919,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.486 2.172 C 19.26 1.316 18.582 0.638 17.726 0.413 C 16.177 0 9.949 0 9.949 0 C 9.949 0 3.721 0 2.172 0.413 C 1.316 0.638 0.638 1.316 0.413 2.172 C 0 3.721 0 6.96 0 6.96 C 0 6.96 0 10.198 0.413 11.747 C 0.638 12.604 1.316 13.281 2.172 13.507 C 3.721 13.919 9.949 13.919 9.949 13.919 C 9.949 13.919 16.177 13.919 17.726 13.507 C 18.582 13.281 19.26 12.604 19.486 11.747 C 19.898 10.198 19.898 6.96 19.898 6.96 C 19.898 6.96 19.898 3.721 19.486 2.172 Z M 7.956 9.949 L 7.956 3.978 L 13.125 6.967 L 7.956 9.957 L 7.956 9.949 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.686,
      top: 6.667,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.029,
    height: 14.993,
    viewBox: "0 0 13.029 14.993",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.485,
      top: 0.502,
      width: 13.029,
      height: 14.993,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.843 0.013 C 7.661 0 8.474 0.007 9.286 0 C 9.313 1.015 9.725 1.93 10.38 2.607 L 10.379 2.606 C 11.085 3.241 12.003 3.653 13.015 3.723 L 13.029 3.724 L 13.029 6.242 C 12.073 6.218 11.174 5.998 10.363 5.619 L 10.404 5.635 C 10.012 5.447 9.681 5.254 9.366 5.038 L 9.392 5.055 C 9.386 6.879 9.398 8.704 9.379 10.522 C 9.328 11.448 9.02 12.293 8.526 12.998 L 8.536 12.983 C 7.71 14.166 6.372 14.943 4.85 14.989 L 4.843 14.989 C 4.782 14.992 4.709 14.993 4.636 14.993 C 3.771 14.993 2.963 14.752 2.274 14.333 L 2.294 14.345 C 1.04 13.59 0.175 12.3 0.015 10.798 L 0.013 10.778 C 0 10.465 -0.006 10.153 0.007 9.847 C 0.252 7.457 2.254 5.609 4.687 5.609 C 4.961 5.609 5.229 5.632 5.489 5.677 L 5.461 5.673 C 5.474 6.597 5.436 7.522 5.436 8.446 C 5.225 8.37 4.981 8.326 4.726 8.326 C 3.792 8.326 2.998 8.923 2.704 9.756 L 2.699 9.771 C 2.633 9.984 2.594 10.23 2.594 10.484 C 2.594 10.587 2.601 10.689 2.613 10.789 L 2.612 10.777 C 2.778 11.8 3.655 12.572 4.712 12.572 C 4.743 12.572 4.773 12.571 4.803 12.57 L 4.798 12.57 C 5.53 12.548 6.165 12.155 6.524 11.573 L 6.529 11.564 C 6.662 11.378 6.754 11.153 6.784 10.908 L 6.785 10.901 C 6.847 9.783 6.822 8.671 6.828 7.552 C 6.834 5.035 6.822 2.523 6.841 0.011 L 6.843 0.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Solutions"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Support"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "About"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Nayax \xA9 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-5rem-2) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Anti-Money Laundering and KYC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Code of Ethics")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: 8.545417785644531,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.057,
      top: 4.767,
      width: 21.522,
      height: 6.593,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.829,
    height: 6.387,
    viewBox: "0 0 2.829 6.387",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.602,
      top: 0.131,
      width: 2.829,
      height: 6.387,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.387 L 1.089 0 L 2.829 0 L 1.74 6.387 L 0 6.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.224,
    height: 6.593,
    viewBox: "0 0 5.224 6.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.408,
      top: 0,
      width: 5.224,
      height: 6.593,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.224 0.268 C 4.879 0.139 4.339 0 3.664 0 C 1.943 0 0.732 0.866 0.721 2.108 C 0.712 3.026 1.586 3.538 2.247 3.843 C 2.924 4.156 3.152 4.356 3.149 4.636 C 3.145 5.064 2.608 5.259 2.107 5.259 C 1.411 5.259 1.04 5.162 0.469 4.924 L 0.244 4.822 L 0 6.252 C 0.407 6.431 1.159 6.585 1.939 6.593 C 3.769 6.593 4.957 5.737 4.971 4.411 C 4.978 3.684 4.514 3.131 3.509 2.675 C 2.901 2.38 2.528 2.183 2.532 1.884 C 2.532 1.618 2.847 1.334 3.529 1.334 C 4.098 1.325 4.511 1.45 4.832 1.579 L 4.988 1.653 L 5.224 0.268 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.252,
    height: 6.383,
    viewBox: "0 0 6.252 6.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.27,
      top: 0.131,
      width: 6.252,
      height: 6.383,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.843 0 L 3.497 0 C 3.081 0 2.769 0.114 2.586 0.53 L 0 6.383 L 1.828 6.383 C 1.828 6.383 2.127 5.596 2.195 5.423 C 2.395 5.423 4.17 5.426 4.424 5.426 C 4.476 5.65 4.636 6.383 4.636 6.383 L 6.252 6.383 L 4.843 0 Z M 2.708 4.124 C 2.852 3.756 3.402 2.339 3.402 2.339 C 3.391 2.356 3.545 1.969 3.633 1.729 L 3.75 2.28 C 3.75 2.28 4.084 3.805 4.153 4.124 L 2.708 4.124 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.141,
    height: 6.377,
    viewBox: "0 0 6.141 6.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.827,
      top: 0.131,
      width: 6.141,
      height: 6.377,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.297 0 L 2.593 4.356 L 2.411 3.471 C 2.094 2.45 1.105 1.345 0 0.791 L 1.559 6.377 L 3.401 6.375 L 6.141 0 L 4.297 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.229,
    height: 3.474,
    viewBox: "0 0 4.229 3.474",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.131,
      width: 4.229,
      height: 3.474,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.83 0 L 0.022 0 L 0 0.133 C 2.184 0.662 3.629 1.939 4.229 3.474 L 3.619 0.539 C 3.513 0.135 3.208 0.014 2.83 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 25.637,
    height: 17.804,
    viewBox: "0 0 25.637 17.804",
    fill: "none",
    style: {
      position: "relative",
      width: 25.637,
      height: 17.804,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.494 15.724 C 21.494 16.027 21.289 16.245 20.995 16.245 C 20.692 16.245 20.497 16.014 20.497 15.724 C 20.497 15.435 20.692 15.204 20.995 15.204 C 21.289 15.204 21.494 15.435 21.494 15.724 Z M 7.66 15.204 C 7.344 15.204 7.162 15.435 7.162 15.724 C 7.162 16.014 7.345 16.245 7.66 16.245 C 7.95 16.245 8.145 16.027 8.145 15.724 C 8.14 15.435 7.95 15.204 7.66 15.204 Z M 12.89 15.191 C 12.65 15.191 12.502 15.346 12.467 15.578 L 13.317 15.578 C 13.277 15.324 13.122 15.191 12.89 15.191 Z M 17.688 15.204 C 17.385 15.204 17.204 15.435 17.204 15.724 C 17.204 16.014 17.386 16.245 17.688 16.245 C 17.991 16.245 18.187 16.027 18.187 15.724 C 18.187 15.435 17.99 15.204 17.688 15.204 Z M 22.401 16.365 C 22.401 16.379 22.415 16.388 22.415 16.414 C 22.415 16.428 22.401 16.437 22.401 16.463 C 22.388 16.477 22.388 16.485 22.379 16.498 C 22.365 16.512 22.356 16.521 22.33 16.521 C 22.316 16.534 22.308 16.534 22.281 16.534 C 22.267 16.534 22.259 16.534 22.232 16.521 C 22.219 16.521 22.21 16.507 22.197 16.498 C 22.183 16.485 22.175 16.476 22.175 16.463 C 22.161 16.441 22.161 16.428 22.161 16.414 C 22.161 16.392 22.161 16.379 22.175 16.365 C 22.175 16.343 22.188 16.33 22.197 16.316 C 22.211 16.303 22.219 16.303 22.232 16.294 C 22.255 16.28 22.267 16.28 22.281 16.28 C 22.304 16.28 22.316 16.28 22.33 16.294 C 22.352 16.307 22.365 16.307 22.379 16.316 C 22.392 16.326 22.388 16.343 22.401 16.365 Z M 22.304 16.428 C 22.326 16.428 22.326 16.414 22.339 16.414 C 22.352 16.401 22.352 16.392 22.352 16.379 C 22.352 16.366 22.352 16.356 22.339 16.344 C 22.326 16.344 22.316 16.33 22.29 16.33 L 22.219 16.33 L 22.219 16.485 L 22.254 16.485 L 22.254 16.423 L 22.267 16.423 L 22.316 16.485 L 22.352 16.485 L 22.304 16.428 Z M 25.637 2.137 L 25.637 15.667 C 25.637 16.846 24.681 17.804 23.5 17.804 L 2.137 17.804 C 0.957 17.804 0 16.847 0 15.667 L 0 2.137 C 0 0.957 0.957 0 2.137 0 L 23.5 0 C 24.68 0 25.637 0.957 25.637 2.137 Z M 2.85 7.281 C 2.85 10.686 5.614 13.445 9.014 13.445 C 10.224 13.445 11.412 13.08 12.418 12.417 C 9.174 9.778 9.196 4.798 12.418 2.158 C 11.412 1.491 10.224 1.13 9.014 1.13 C 5.614 1.126 2.85 3.889 2.85 7.281 Z M 12.819 12.124 C 15.957 9.676 15.943 4.905 12.819 2.444 C 9.695 4.905 9.681 9.681 12.819 12.124 Z M 6.485 15.52 C 6.485 15.133 6.231 14.879 5.831 14.866 C 5.626 14.866 5.408 14.928 5.261 15.155 C 5.154 14.972 4.972 14.866 4.718 14.866 C 4.549 14.866 4.38 14.928 4.246 15.106 L 4.246 14.91 L 3.881 14.91 L 3.881 16.544 L 4.246 16.544 C 4.246 15.703 4.135 15.2 4.647 15.2 C 5.101 15.2 5.012 15.654 5.012 16.544 L 5.364 16.544 C 5.364 15.729 5.252 15.2 5.764 15.2 C 6.218 15.2 6.129 15.645 6.129 16.544 L 6.494 16.544 L 6.494 15.52 L 6.485 15.52 Z M 8.484 14.91 L 8.132 14.91 L 8.132 15.106 C 8.012 14.959 7.843 14.866 7.612 14.866 C 7.153 14.866 6.802 15.231 6.802 15.724 C 6.802 16.223 7.153 16.583 7.612 16.583 C 7.843 16.583 8.012 16.498 8.132 16.343 L 8.132 16.548 L 8.484 16.548 L 8.484 14.91 Z M 10.287 16.05 C 10.287 15.382 9.268 15.684 9.268 15.373 C 9.268 15.119 9.797 15.16 10.091 15.324 L 10.238 15.035 C 9.819 14.763 8.893 14.768 8.893 15.4 C 8.893 16.036 9.912 15.769 9.912 16.067 C 9.912 16.348 9.312 16.325 8.991 16.103 L 8.836 16.383 C 9.334 16.721 10.287 16.65 10.287 16.05 Z M 11.862 16.463 L 11.765 16.16 C 11.596 16.253 11.221 16.356 11.221 15.978 L 11.221 15.239 L 11.805 15.239 L 11.805 14.91 L 11.221 14.91 L 11.221 14.411 L 10.856 14.411 L 10.856 14.91 L 10.518 14.91 L 10.518 15.235 L 10.856 15.235 L 10.856 15.978 C 10.856 16.762 11.626 16.619 11.862 16.463 Z M 12.454 15.867 L 13.678 15.867 C 13.678 15.146 13.348 14.861 12.903 14.861 C 12.431 14.861 12.093 15.212 12.093 15.72 C 12.093 16.632 13.099 16.783 13.598 16.352 L 13.429 16.085 C 13.082 16.37 12.556 16.343 12.454 15.867 Z M 15.085 14.91 C 14.88 14.821 14.569 14.83 14.408 15.106 L 14.408 14.91 L 14.043 14.91 L 14.043 16.544 L 14.408 16.544 L 14.408 15.623 C 14.408 15.106 14.831 15.173 14.978 15.248 L 15.085 14.91 Z M 15.556 15.724 C 15.556 15.216 16.073 15.052 16.478 15.35 L 16.647 15.061 C 16.13 14.656 15.191 14.878 15.191 15.728 C 15.191 16.61 16.188 16.787 16.647 16.396 L 16.478 16.107 C 16.068 16.396 15.556 16.223 15.556 15.724 Z M 18.525 14.91 L 18.159 14.91 L 18.159 15.106 C 17.79 14.616 16.829 14.893 16.829 15.724 C 16.829 16.579 17.825 16.824 18.159 16.343 L 18.159 16.548 L 18.525 16.548 L 18.525 14.91 Z M 20.024 14.91 C 19.918 14.857 19.535 14.781 19.348 15.106 L 19.348 14.91 L 18.996 14.91 L 18.996 16.544 L 19.348 16.544 L 19.348 15.623 C 19.348 15.133 19.749 15.164 19.918 15.248 L 20.024 14.91 Z M 21.818 14.247 L 21.466 14.247 L 21.466 15.106 C 21.101 14.621 20.136 14.879 20.136 15.724 C 20.136 16.588 21.137 16.819 21.466 16.343 L 21.466 16.548 L 21.818 16.548 L 21.818 14.247 Z M 22.157 10.905 L 22.157 11.11 L 22.192 11.11 L 22.192 10.905 L 22.276 10.905 L 22.276 10.87 L 22.071 10.87 L 22.071 10.905 L 22.157 10.905 Z M 22.45 16.414 C 22.45 16.392 22.45 16.365 22.437 16.343 C 22.424 16.329 22.415 16.308 22.402 16.294 C 22.389 16.28 22.367 16.272 22.353 16.259 C 22.331 16.259 22.304 16.245 22.282 16.245 C 22.268 16.245 22.247 16.259 22.219 16.259 C 22.197 16.272 22.184 16.281 22.171 16.294 C 22.148 16.307 22.135 16.329 22.135 16.343 C 22.122 16.365 22.122 16.392 22.122 16.414 C 22.122 16.428 22.122 16.449 22.135 16.477 C 22.135 16.49 22.149 16.512 22.171 16.526 C 22.183 16.539 22.193 16.548 22.219 16.561 C 22.242 16.574 22.268 16.574 22.282 16.574 C 22.304 16.574 22.331 16.574 22.353 16.561 C 22.367 16.547 22.388 16.538 22.402 16.526 C 22.416 16.513 22.425 16.49 22.437 16.477 C 22.45 16.45 22.45 16.428 22.45 16.414 Z M 22.593 10.865 L 22.53 10.865 L 22.459 11.02 L 22.388 10.865 L 22.325 10.865 L 22.325 11.105 L 22.36 11.105 L 22.36 10.922 L 22.432 11.078 L 22.481 11.078 L 22.543 10.922 L 22.543 11.105 L 22.592 11.105 L 22.593 10.865 Z M 22.788 7.281 C 22.788 3.889 20.024 1.126 16.624 1.126 C 15.414 1.126 14.226 1.491 13.219 2.154 C 16.429 4.794 16.478 9.787 13.219 12.413 C 14.226 13.081 15.423 13.441 16.624 13.441 C 20.024 13.446 22.788 10.686 22.788 7.281 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.957,
      top: 3.753,
      width: 23.72,
      height: 8.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.620,
    height: 3.877,
    viewBox: "0 0 22.620 3.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.62,
      height: 3.877,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.875 L 1.139 3.875 L 1.396 3.258 L 1.971 3.258 L 2.228 3.875 L 4.469 3.875 L 4.469 3.403 L 4.67 3.877 L 5.833 3.877 L 6.033 3.396 L 6.033 3.875 L 11.605 3.875 L 11.602 2.862 L 11.71 2.862 C 11.785 2.864 11.807 2.871 11.807 2.995 L 11.807 3.875 L 14.689 3.875 L 14.689 3.639 C 14.921 3.763 15.283 3.875 15.758 3.875 L 16.97 3.875 L 17.23 3.258 L 17.805 3.258 L 18.059 3.875 L 20.395 3.875 L 20.395 3.288 L 20.748 3.875 L 22.62 3.875 L 22.62 0 L 20.768 0 L 20.768 0.458 L 20.508 0 L 18.607 0 L 18.607 0.458 L 18.369 0 L 15.801 0 C 15.372 0 14.994 0.06 14.689 0.226 L 14.689 0 L 12.917 0 L 12.917 0.226 C 12.722 0.055 12.458 0 12.164 0 L 5.69 0 L 5.256 1.001 L 4.81 0 L 2.771 0 L 2.771 0.458 L 2.547 0 L 0.808 0 L 0 1.842 L 0 3.875 L 0 3.875 Z M 7.192 3.316 L 6.508 3.316 L 6.506 1.14 L 5.539 3.316 L 4.953 3.316 L 3.984 1.138 L 3.984 3.316 L 2.628 3.316 L 2.371 2.696 L 0.983 2.696 L 0.724 3.316 L 0 3.316 L 1.194 0.538 L 2.185 0.538 L 3.319 3.168 L 3.319 0.538 L 4.407 0.538 L 5.28 2.422 L 6.082 0.538 L 7.192 0.538 L 7.192 3.316 L 7.192 3.316 Z M 2.144 2.119 L 1.687 1.012 L 1.233 2.119 L 2.144 2.119 Z M 9.913 3.316 L 7.685 3.316 L 7.685 0.538 L 9.913 0.538 L 9.913 1.116 L 8.352 1.116 L 8.352 1.617 L 9.875 1.617 L 9.875 2.186 L 8.352 2.186 L 8.352 2.741 L 9.913 2.741 L 9.913 3.316 Z M 13.052 1.286 C 13.052 1.729 12.755 1.958 12.582 2.026 C 12.728 2.082 12.852 2.179 12.912 2.26 C 13.006 2.398 13.022 2.522 13.022 2.77 L 13.022 3.316 L 12.35 3.316 L 12.347 2.965 C 12.347 2.798 12.363 2.558 12.242 2.424 C 12.144 2.326 11.996 2.305 11.756 2.305 L 11.04 2.305 L 11.04 3.316 L 10.373 3.316 L 10.373 0.538 L 11.907 0.538 C 12.248 0.538 12.499 0.547 12.714 0.671 C 12.925 0.795 13.052 0.976 13.052 1.286 Z M 12.209 1.698 C 12.117 1.754 12.009 1.756 11.879 1.756 L 11.069 1.756 L 11.069 1.139 L 11.89 1.139 C 12.006 1.139 12.127 1.144 12.206 1.189 C 12.293 1.229 12.346 1.315 12.346 1.434 C 12.346 1.556 12.295 1.653 12.209 1.698 Z M 14.121 3.316 L 13.441 3.316 L 13.441 0.538 L 14.121 0.538 L 14.121 3.316 Z M 22.02 3.316 L 21.075 3.316 L 19.811 1.231 L 19.811 3.316 L 18.453 3.316 L 18.193 2.696 L 16.808 2.696 L 16.556 3.316 L 15.776 3.316 C 15.452 3.316 15.041 3.244 14.809 3.008 C 14.575 2.773 14.453 2.453 14.453 1.948 C 14.453 1.536 14.526 1.159 14.812 0.862 C 15.028 0.64 15.365 0.538 15.825 0.538 L 16.471 0.538 L 16.471 1.133 L 15.838 1.133 C 15.595 1.133 15.458 1.169 15.325 1.297 C 15.212 1.414 15.134 1.636 15.134 1.927 C 15.134 2.224 15.193 2.439 15.317 2.579 C 15.42 2.689 15.606 2.722 15.782 2.722 L 16.081 2.722 L 17.021 0.538 L 18.02 0.538 L 19.149 3.165 L 19.149 0.538 L 20.165 0.538 L 21.337 2.472 L 21.337 0.538 L 22.02 0.538 L 22.02 3.316 Z M 17.966 2.119 L 17.505 1.012 L 17.046 2.119 L 17.966 2.119 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.008,
    height: 3.879,
    viewBox: "0 0 19.008 3.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.712,
      top: 4.775,
      width: 19.008,
      height: 3.879,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.007 2.976 C 18.845 3.212 18.529 3.331 18.102 3.331 L 16.814 3.331 L 16.814 2.736 L 18.097 2.736 C 18.224 2.736 18.313 2.719 18.367 2.667 C 18.413 2.624 18.445 2.561 18.445 2.486 C 18.445 2.405 18.413 2.34 18.364 2.302 C 18.316 2.259 18.245 2.24 18.129 2.24 C 17.503 2.219 16.722 2.259 16.722 1.38 C 16.722 0.977 16.979 0.553 17.678 0.553 L 19.007 0.553 L 19.007 0 L 17.773 0 C 17.4 0 17.13 0.089 16.938 0.227 L 16.938 0 L 15.113 0 C 14.821 0 14.478 0.072 14.316 0.227 L 14.316 0 L 11.056 0 L 11.056 0.227 C 10.797 0.041 10.359 0 10.157 0 L 8.007 0 L 8.007 0.227 C 7.802 0.029 7.345 0 7.067 0 L 4.661 0 L 4.11 0.593 L 3.595 0 L 0 0 L 0 3.877 L 3.527 3.877 L 4.094 3.274 L 4.629 3.877 L 6.803 3.879 L 6.803 2.967 L 7.017 2.967 C 7.305 2.972 7.645 2.96 7.945 2.831 L 7.945 3.877 L 9.739 3.877 L 9.739 2.867 L 9.825 2.867 C 9.935 2.867 9.946 2.871 9.946 2.981 L 9.946 3.877 L 15.394 3.877 C 15.739 3.877 16.101 3.789 16.301 3.629 L 16.301 3.877 L 18.029 3.877 C 18.388 3.877 18.74 3.827 19.007 3.698 L 19.007 2.976 Z M 8.206 1.485 C 8.206 2.257 7.628 2.416 7.045 2.416 L 6.213 2.416 L 6.213 3.348 L 4.917 3.348 L 4.096 2.428 L 3.242 3.348 L 0.601 3.348 L 0.601 0.569 L 3.283 0.569 L 4.103 1.48 L 4.951 0.569 L 7.082 0.569 C 7.611 0.569 8.206 0.715 8.206 1.485 Z M 2.905 2.763 L 1.265 2.763 L 1.265 2.211 L 2.729 2.211 L 2.729 1.644 L 1.265 1.644 L 1.265 1.139 L 2.937 1.139 L 3.666 1.948 L 2.905 2.763 Z M 5.546 3.082 L 4.522 1.95 L 5.546 0.854 L 5.546 3.082 Z M 7.06 1.846 L 6.199 1.846 L 6.199 1.139 L 7.068 1.139 C 7.309 1.139 7.476 1.236 7.476 1.479 C 7.476 1.72 7.317 1.846 7.06 1.846 Z M 11.575 0.569 L 13.8 0.569 L 13.8 1.144 L 12.239 1.144 L 12.239 1.649 L 13.762 1.649 L 13.762 2.216 L 12.239 2.216 L 12.239 2.769 L 13.8 2.771 L 13.8 3.348 L 11.575 3.348 L 11.575 0.569 Z M 10.719 2.057 C 10.868 2.111 10.989 2.209 11.046 2.29 C 11.14 2.426 11.154 2.552 11.156 2.797 L 11.156 3.348 L 10.487 3.348 L 10.487 3 C 10.487 2.833 10.503 2.586 10.379 2.456 C 10.282 2.357 10.133 2.333 9.89 2.333 L 9.177 2.333 L 9.177 3.348 L 8.507 3.348 L 8.507 0.569 L 10.047 0.569 C 10.384 0.569 10.63 0.584 10.849 0.7 C 11.06 0.827 11.192 1 11.192 1.317 C 11.192 1.761 10.895 1.987 10.719 2.057 Z M 10.342 1.705 C 10.253 1.758 10.143 1.763 10.013 1.763 L 9.203 1.763 L 9.203 1.139 L 10.024 1.139 C 10.143 1.139 10.262 1.141 10.342 1.189 C 10.429 1.234 10.48 1.32 10.48 1.439 C 10.48 1.558 10.429 1.653 10.342 1.705 Z M 16.362 1.882 C 16.492 2.016 16.562 2.185 16.562 2.471 C 16.562 3.069 16.186 3.348 15.514 3.348 L 14.215 3.348 L 14.215 2.752 L 15.509 2.752 C 15.635 2.752 15.725 2.735 15.781 2.683 C 15.827 2.64 15.86 2.578 15.86 2.502 C 15.86 2.421 15.824 2.357 15.779 2.318 C 15.728 2.276 15.657 2.257 15.541 2.257 C 14.917 2.235 14.137 2.276 14.137 1.397 C 14.137 0.993 14.391 0.569 15.09 0.569 L 16.427 0.569 L 16.427 1.161 L 15.203 1.161 C 15.082 1.161 15.003 1.165 14.936 1.211 C 14.863 1.256 14.836 1.323 14.836 1.411 C 14.836 1.516 14.898 1.587 14.982 1.618 C 15.052 1.642 15.128 1.649 15.242 1.649 L 15.601 1.659 C 15.963 1.668 16.211 1.73 16.362 1.882 Z M 19.008 1.139 L 17.793 1.139 C 17.672 1.139 17.591 1.143 17.523 1.189 C 17.453 1.234 17.426 1.3 17.426 1.389 C 17.426 1.493 17.485 1.565 17.571 1.596 C 17.642 1.62 17.717 1.627 17.828 1.627 L 18.19 1.637 C 18.554 1.646 18.798 1.708 18.946 1.86 C 18.973 1.882 18.99 1.905 19.008 1.929 L 19.008 1.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e8329a5d46a21c6f-f3d97af6",
    style: {
      position: "relative",
      width: 20.295,
      height: 14.965,
      mixBlendMode: "lighten",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-766c0bac5f158721-d965af24",
    style: {
      position: "relative",
      width: 25.636,
      height: 15.713,
      borderRadius: 2.4233274459838867,
      boxShadow: "inset 0 0 0 1.068px var(--stroke-action-inverted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ff756ba7b5fbe6f3",
    style: {
      position: "relative",
      width: 22.432,
      height: 15.903,
      flexShrink: 0
    }
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 360,
      backgroundColor: "rgb(38,38,38)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      padding: "40px 16px 32px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--icon-inverted-default) * 1px)",
      paddingRight: "calc(var(--text-base-default) * 1px)",
      paddingBottom: "calc(var(--action-highlight-default) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 56,
      lineHeight: "64px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255,255,255)"
    }
  }, "Keep yourself "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255,255,255)"
    }
  }, "updated")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Join our VIP mailing list and get exclusive updates and promotions as soon as they are released")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--icon-inverted-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10000000,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-inverted)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--text-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingRight: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      lineHeight: "25px",
      color: "var(--text-inverted-subdued)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Enter your email address*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--action-highlight-default)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.ArrowRight, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10000000,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--0-5rem-2) * 1px)",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingRight: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.ArrowRight2, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 60,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-success-inverted)"
    }
  }, props.text3 ?? "You have successfully subscribed to our newsletter!")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text4 ?? "Your information will be processed in accordance with our Privacy Policy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--icon-base-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 90,
      height: 36,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.117,
      top: 7.014,
      width: 90.191,
      height: 25.226,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.597,
    height: 16.984,
    viewBox: "0 0 15.597 16.984",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.569,
      top: 4.97,
      width: 15.597,
      height: 16.984,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.31 0 C 3.086 0 0 3.802 0 8.493 C 0 13.183 2.961 16.984 8.31 16.984 C 12.899 16.984 15.597 12.799 15.597 8.109 C 15.597 4.924 13.418 0 8.31 0 Z M 8.31 12.92 C 5.316 12.92 3.976 10.938 3.976 8.492 C 3.976 6.045 5.377 4.063 8.31 4.063 C 11.076 4.063 12.643 6.045 12.643 8.492 C 12.643 10.938 11.2 12.92 8.31 12.92 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.823,
    height: 21.501,
    viewBox: "0 0 18.823 21.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.823,
      height: 21.501,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.298 0 L 14.298 13.433 L 4.161 0 L 0 0 L 0 21.501 L 4.524 21.501 L 4.524 7.817 L 12.546 18.284 C 14.673 17.23 16.918 16.277 18.504 15.805 L 18.823 15.71 L 18.823 0 L 14.299 0 L 14.298 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.689,
    height: 4.578,
    viewBox: "0 0 9.689 4.578",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.135,
      top: 16.922,
      width: 9.689,
      height: 4.578,
      color: "rgb(255,205,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.688 4.578 L 9.688 0 C 7.21 0.739 3.047 2.7 0.416 4.316 C 0.323 4.374 0.23 4.431 0.141 4.488 C 0.093 4.519 0.046 4.548 0 4.578 L 9.689 4.578 L 9.688 4.578 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.275,
    height: 16.531,
    viewBox: "0 0 16.275 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 73.916,
      top: 4.97,
      width: 16.275,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.275 0 L 11.327 0 L 8.329 4.687 L 4.947 0 L 0 0 L 5.855 8.265 L 0.766 16.531 L 5.714 16.531 L 8.329 12.002 L 11.327 16.531 L 16.275 16.531 L 10.803 8.265 L 16.275 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.754,
    height: 20.256,
    viewBox: "0 0 17.754 20.256",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.546,
      top: 4.97,
      width: 17.754,
      height: 20.256,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.103 0 L 8.965 9.909 L 4.76 0 L 0 0 L 6.789 15.121 L 4.644 20.256 L 8.972 20.256 L 17.754 0 L 13.103 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.934,
    height: 16.531,
    viewBox: "0 0 3.934 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.504,
      top: 4.97,
      width: 3.934,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.484 16.531 L 3.934 16.531 L 3.934 0 L 0.484 0 L 0 2.922 L 0 13.511 L 0.484 16.531 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.597,
    height: 16.984,
    viewBox: "0 0 15.597 16.984",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.632,
      top: 4.97,
      width: 15.597,
      height: 16.984,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.31 0 C 3.086 0 0 3.802 0 8.493 C 0 13.183 2.961 16.984 8.31 16.984 C 12.899 16.984 15.597 12.799 15.597 8.109 C 15.597 4.924 13.418 0 8.31 0 Z M 8.31 12.92 C 5.316 12.92 3.976 10.938 3.976 8.492 C 3.976 6.045 5.377 4.063 8.31 4.063 C 11.076 4.063 12.643 6.045 12.643 8.492 C 12.643 10.938 11.2 12.92 8.31 12.92 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.935,
    height: 16.531,
    viewBox: "0 0 3.935 16.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 68.566,
      top: 4.97,
      width: 3.935,
      height: 16.531,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.485 16.531 L 3.935 16.531 L 3.935 0 L 0.485 0 L 0 2.922 L 0 13.511 L 0.485 16.531 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "23px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We are a leading global provider of EMV certified cashless payment solutions, telemetry system, and a management & monitoring business suite for the unattended machine industry."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.Location, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 39,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "US"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      transform: "matrix(0,1,-1,0,39,0)",
      transformOrigin: "0 0",
      color: "var(--icon-inverted-default)"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.ChevronDown, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Executive Plaza 1, 11350\nMccormick Road, Hunt Valley,  Maryland 21031"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Phone, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "(410) 666-3800"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 30,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.938,
      top: 6.961,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.563,
      height: 16.267,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.562644958496094,
      height: 16.267230987548828,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.561,
    height: 16.262,
    viewBox: "0 0 8.561 16.262",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.561,
      height: 16.262,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.817 4.27 L 5.817 6.072 L 8.561 6.072 L 8.119 9.079 L 5.817 9.079 L 5.817 16.175 C 5.351 16.233 4.881 16.262 4.411 16.262 C 3.814 16.263 3.218 16.217 2.628 16.126 L 2.628 9.084 L 0 9.084 L 0.052 6.072 L 2.628 6.072 L 2.628 3.477 C 2.628 1.549 4.363 -0.724 8.561 0.221 L 8.561 2.746 L 7.287 2.769 C 7.089 2.762 6.893 2.797 6.709 2.871 C 6.526 2.944 6.36 3.055 6.222 3.196 C 6.084 3.337 5.977 3.506 5.907 3.69 C 5.837 3.875 5.807 4.072 5.817 4.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 16.046,
    height: 16.405,
    viewBox: "0 0 16.046 16.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.789,
      top: 6.781,
      width: 16.046,
      height: 16.405,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.546 6.948 L 15.519 0 L 14.105 0 L 8.919 6.032 L 4.778 0 L 0 0 L 6.271 9.118 L 0 16.405 L 1.414 16.405 L 6.888 10.034 L 11.268 16.405 L 16.046 16.405 L 9.546 6.948 Z M 7.605 9.208 L 6.968 8.302 L 1.921 1.065 L 4.091 1.065 L 8.172 6.898 L 8.81 7.804 L 14.105 15.379 L 11.935 15.379 L 7.605 9.208 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.961,
      top: 6.961,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416,
      height: 13.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.416336059570312,
      height: 13.302857398986816,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.404,
      height: 13.305,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.237,
    height: 3.237,
    viewBox: "0 0 3.237 3.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.237,
      height: 3.237,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.237 1.619 C 3.237 1.939 3.142 2.252 2.964 2.518 C 2.786 2.784 2.534 2.991 2.238 3.114 C 1.942 3.236 1.617 3.268 1.303 3.206 C 0.989 3.144 0.7 2.989 0.474 2.763 C 0.248 2.537 0.094 2.248 0.031 1.934 C -0.031 1.62 0.001 1.295 0.123 0.999 C 0.246 0.703 0.453 0.451 0.719 0.273 C 0.986 0.095 1.298 0 1.619 0 C 2.048 0 2.46 0.171 2.763 0.474 C 3.067 0.778 3.237 1.189 3.237 1.619 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.722,
    height: 8.923,
    viewBox: "0 0 2.722 8.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.258,
      top: 4.375,
      width: 2.722,
      height: 8.923,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.722 0 L 0 0 L 0 8.923 L 2.722 8.923 L 2.722 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.740,
    height: 9.180,
    viewBox: "0 0 8.740 9.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.664,
      top: 4.125,
      width: 8.74,
      height: 9.18,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.695 1.49 L 2.695 0.253 L 0 0.253 L 0 9.176 L 2.695 9.176 L 2.695 5.65 C 2.695 4.123 2.899 3.393 3.267 2.992 L 3.289 2.97 C 3.421 2.82 3.582 2.699 3.762 2.613 C 3.942 2.527 4.137 2.478 4.336 2.469 C 4.536 2.46 4.735 2.49 4.922 2.559 C 5.109 2.628 5.28 2.734 5.426 2.87 C 5.734 3.259 5.888 3.749 5.858 4.245 L 5.858 9.18 L 8.74 9.18 L 8.74 4.476 C 8.74 1.091 7.479 0.164 5.845 0.039 L 5.703 0.028 C 5.113 -0.053 4.512 0.043 3.977 0.303 C 3.441 0.563 2.995 0.976 2.695 1.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.008,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.961,
      top: 7.969,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.334,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.332720756530762,
      height: 13.33371639251709,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.894,
    height: 6.894,
    viewBox: "0 0 6.894 6.894",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.219,
      top: 3.219,
      width: 6.894,
      height: 6.894,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.448 1.227 C 3.887 1.227 4.316 1.358 4.681 1.601 C 5.046 1.845 5.331 2.192 5.499 2.598 C 5.667 3.003 5.711 3.45 5.625 3.88 C 5.54 4.311 5.328 4.706 5.018 5.017 C 4.707 5.327 4.312 5.539 3.881 5.624 C 3.451 5.71 3.004 5.666 2.599 5.498 C 2.193 5.33 1.846 5.045 1.602 4.68 C 1.359 4.315 1.228 3.886 1.228 3.447 C 1.228 2.858 1.462 2.294 1.879 1.878 C 2.295 1.461 2.859 1.227 3.448 1.227 Z M 3.448 0 C 2.766 0 2.1 0.202 1.533 0.581 C 0.966 0.959 0.524 1.498 0.263 2.128 C 0.002 2.757 -0.067 3.451 0.066 4.119 C 0.199 4.788 0.527 5.403 1.01 5.885 C 1.492 6.367 2.106 6.695 2.775 6.828 C 3.444 6.961 4.137 6.893 4.767 6.632 C 5.397 6.371 5.935 5.929 6.314 5.362 C 6.692 4.795 6.895 4.128 6.894 3.446 C 6.893 2.533 6.53 1.657 5.884 1.011 C 5.238 0.364 4.362 0.001 3.448 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.333,
    height: 13.329,
    viewBox: "0 0 13.333 13.329",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.333,
      height: 13.329,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.605 1.227 C 9.933 1.227 10.259 1.292 10.562 1.418 C 10.865 1.544 11.141 1.728 11.373 1.96 C 11.606 2.192 11.79 2.468 11.915 2.772 C 12.041 3.075 12.105 3.4 12.105 3.729 L 12.105 9.602 C 12.105 9.93 12.041 10.256 11.915 10.559 C 11.79 10.863 11.606 11.138 11.373 11.371 C 11.141 11.603 10.865 11.787 10.562 11.913 C 10.259 12.039 9.933 12.103 9.605 12.103 L 3.732 12.103 C 3.403 12.104 3.078 12.04 2.774 11.914 C 2.471 11.789 2.195 11.605 1.962 11.373 C 1.73 11.142 1.545 10.866 1.419 10.563 C 1.293 10.259 1.228 9.934 1.227 9.606 L 1.227 3.733 C 1.227 3.404 1.291 3.078 1.416 2.774 C 1.542 2.47 1.726 2.194 1.958 1.961 C 2.19 1.729 2.466 1.544 2.77 1.418 C 3.074 1.292 3.399 1.227 3.728 1.227 L 9.605 1.227 Z M 9.605 0 L 3.732 0 C 2.743 0 1.794 0.393 1.094 1.092 C 0.395 1.791 0.001 2.739 0 3.728 L 0 9.601 C 0.001 10.589 0.394 11.537 1.093 12.236 C 1.792 12.935 2.739 13.328 3.728 13.329 L 9.601 13.329 C 10.589 13.329 11.537 12.937 12.237 12.239 C 12.936 11.541 13.33 10.594 13.333 9.606 L 13.333 3.733 C 13.333 2.744 12.94 1.795 12.241 1.095 C 11.542 0.395 10.594 0.001 9.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.627,
    height: 1.627,
    viewBox: "0 0 1.627 1.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.469,
      top: 2.226,
      width: 1.627,
      height: 1.627,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.627 0.813 C 1.627 0.974 1.579 1.131 1.489 1.265 C 1.4 1.399 1.273 1.503 1.124 1.565 C 0.976 1.626 0.812 1.642 0.655 1.611 C 0.497 1.58 0.352 1.502 0.238 1.388 C 0.124 1.275 0.047 1.13 0.016 0.972 C -0.016 0.814 0 0.651 0.062 0.502 C 0.123 0.353 0.228 0.226 0.361 0.137 C 0.495 0.048 0.652 0 0.813 0 C 0.92 0 1.026 0.021 1.124 0.062 C 1.223 0.103 1.313 0.163 1.388 0.238 C 1.464 0.314 1.524 0.403 1.565 0.502 C 1.605 0.601 1.627 0.706 1.627 0.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.898,
    height: 13.919,
    viewBox: "0 0 19.898 13.919",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.984,
      top: 7.969,
      width: 19.898,
      height: 13.919,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.486 2.172 C 19.26 1.316 18.582 0.638 17.726 0.413 C 16.177 0 9.949 0 9.949 0 C 9.949 0 3.721 0 2.172 0.413 C 1.316 0.638 0.638 1.316 0.413 2.172 C 0 3.721 0 6.96 0 6.96 C 0 6.96 0 10.198 0.413 11.747 C 0.638 12.604 1.316 13.281 2.172 13.507 C 3.721 13.919 9.949 13.919 9.949 13.919 C 9.949 13.919 16.177 13.919 17.726 13.507 C 18.582 13.281 19.26 12.604 19.486 11.747 C 19.898 10.198 19.898 6.96 19.898 6.96 C 19.898 6.96 19.898 3.721 19.486 2.172 Z M 7.956 9.949 L 7.956 3.978 L 13.125 6.967 L 7.956 9.957 L 7.956 9.949 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 0,
      width: 29.863,
      height: 29.863
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.863,
    height: 29.863,
    viewBox: "0 0 29.863 29.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.863,
      height: 29.863,
      color: "var(--stroke-action-inverted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.863 14.931 L 28.863 14.931 C 28.863 22.625 22.625 28.863 14.931 28.863 L 14.931 29.863 L 14.931 30.863 C 23.73 30.863 30.863 23.73 30.863 14.931 L 29.863 14.931 Z M 14.931 29.863 L 14.931 28.863 C 7.237 28.863 1 22.625 1 14.931 L 0 14.931 L -1 14.931 C -1 23.73 6.133 30.863 14.931 30.863 L 14.931 29.863 Z M 0 14.931 L 1 14.931 C 1 7.237 7.237 1 14.931 1 L 14.931 0 L 14.931 -1 C 6.133 -1 -1 6.133 -1 14.931 L 0 14.931 Z M 14.931 0 L 14.931 1 C 22.625 1 28.863 7.237 28.863 14.931 L 29.863 14.931 L 30.863 14.931 C 30.863 6.133 23.73 -1 14.931 -1 L 14.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.686,
      top: 6.667,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.029,
    height: 14.993,
    viewBox: "0 0 13.029 14.993",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.485,
      top: 0.502,
      width: 13.029,
      height: 14.993,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.843 0.013 C 7.661 0 8.474 0.007 9.286 0 C 9.313 1.015 9.725 1.93 10.38 2.607 L 10.379 2.606 C 11.085 3.241 12.003 3.653 13.015 3.723 L 13.029 3.724 L 13.029 6.242 C 12.073 6.218 11.174 5.998 10.363 5.619 L 10.404 5.635 C 10.012 5.447 9.681 5.254 9.366 5.038 L 9.392 5.055 C 9.386 6.879 9.398 8.704 9.379 10.522 C 9.328 11.448 9.02 12.293 8.526 12.998 L 8.536 12.983 C 7.71 14.166 6.372 14.943 4.85 14.989 L 4.843 14.989 C 4.782 14.992 4.709 14.993 4.636 14.993 C 3.771 14.993 2.963 14.752 2.274 14.333 L 2.294 14.345 C 1.04 13.59 0.175 12.3 0.015 10.798 L 0.013 10.778 C 0 10.465 -0.006 10.153 0.007 9.847 C 0.252 7.457 2.254 5.609 4.687 5.609 C 4.961 5.609 5.229 5.632 5.489 5.677 L 5.461 5.673 C 5.474 6.597 5.436 7.522 5.436 8.446 C 5.225 8.37 4.981 8.326 4.726 8.326 C 3.792 8.326 2.998 8.923 2.704 9.756 L 2.699 9.771 C 2.633 9.984 2.594 10.23 2.594 10.484 C 2.594 10.587 2.601 10.689 2.613 10.789 L 2.612 10.777 C 2.778 11.8 3.655 12.572 4.712 12.572 C 4.743 12.572 4.773 12.571 4.803 12.57 L 4.798 12.57 C 5.53 12.548 6.165 12.155 6.524 11.573 L 6.529 11.564 C 6.662 11.378 6.754 11.153 6.784 10.908 L 6.785 10.901 C 6.847 9.783 6.822 8.671 6.828 7.552 C 6.834 5.035 6.822 2.523 6.841 0.011 L 6.843 0.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Solutions"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "Support"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: "25px",
      color: "var(--text-inverted-default)",
      flexShrink: 0
    }
  }, "About"), /*#__PURE__*/React.createElement(__ds_scope.Add, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--icon-inverted-default-2)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.2,
      backgroundColor: "rgb(199,199,199)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--action-highlight-default) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-subdued)",
      flexShrink: 0
    }
  }, "Nayax \xA9 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--0-5rem-2) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Anti-Money Laundering and KYC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Code of Ethics")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: 8.545417785644531,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.057,
      top: 4.767,
      width: 21.522,
      height: 6.593,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.829,
    height: 6.387,
    viewBox: "0 0 2.829 6.387",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.602,
      top: 0.131,
      width: 2.829,
      height: 6.387,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.387 L 1.089 0 L 2.829 0 L 1.74 6.387 L 0 6.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.224,
    height: 6.593,
    viewBox: "0 0 5.224 6.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.408,
      top: 0,
      width: 5.224,
      height: 6.593,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.224 0.268 C 4.879 0.139 4.339 0 3.664 0 C 1.943 0 0.732 0.866 0.721 2.108 C 0.712 3.026 1.586 3.538 2.247 3.843 C 2.924 4.156 3.152 4.356 3.149 4.636 C 3.145 5.064 2.608 5.259 2.107 5.259 C 1.411 5.259 1.04 5.162 0.469 4.924 L 0.244 4.822 L 0 6.252 C 0.407 6.431 1.159 6.585 1.939 6.593 C 3.769 6.593 4.957 5.737 4.971 4.411 C 4.978 3.684 4.514 3.131 3.509 2.675 C 2.901 2.38 2.528 2.183 2.532 1.884 C 2.532 1.618 2.847 1.334 3.529 1.334 C 4.098 1.325 4.511 1.45 4.832 1.579 L 4.988 1.653 L 5.224 0.268 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.252,
    height: 6.383,
    viewBox: "0 0 6.252 6.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.27,
      top: 0.131,
      width: 6.252,
      height: 6.383,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.843 0 L 3.497 0 C 3.081 0 2.769 0.114 2.586 0.53 L 0 6.383 L 1.828 6.383 C 1.828 6.383 2.127 5.596 2.195 5.423 C 2.395 5.423 4.17 5.426 4.424 5.426 C 4.476 5.65 4.636 6.383 4.636 6.383 L 6.252 6.383 L 4.843 0 Z M 2.708 4.124 C 2.852 3.756 3.402 2.339 3.402 2.339 C 3.391 2.356 3.545 1.969 3.633 1.729 L 3.75 2.28 C 3.75 2.28 4.084 3.805 4.153 4.124 L 2.708 4.124 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.141,
    height: 6.377,
    viewBox: "0 0 6.141 6.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.827,
      top: 0.131,
      width: 6.141,
      height: 6.377,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.297 0 L 2.593 4.356 L 2.411 3.471 C 2.094 2.45 1.105 1.345 0 0.791 L 1.559 6.377 L 3.401 6.375 L 6.141 0 L 4.297 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.229,
    height: 3.474,
    viewBox: "0 0 4.229 3.474",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.131,
      width: 4.229,
      height: 3.474,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.83 0 L 0.022 0 L 0 0.133 C 2.184 0.662 3.629 1.939 4.229 3.474 L 3.619 0.539 C 3.513 0.135 3.208 0.014 2.83 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 25.637,
    height: 17.804,
    viewBox: "0 0 25.637 17.804",
    fill: "none",
    style: {
      position: "relative",
      width: 25.637,
      height: 17.804,
      flexShrink: 0,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.494 15.724 C 21.494 16.027 21.289 16.245 20.995 16.245 C 20.692 16.245 20.497 16.014 20.497 15.724 C 20.497 15.435 20.692 15.204 20.995 15.204 C 21.289 15.204 21.494 15.435 21.494 15.724 Z M 7.66 15.204 C 7.344 15.204 7.162 15.435 7.162 15.724 C 7.162 16.014 7.345 16.245 7.66 16.245 C 7.95 16.245 8.145 16.027 8.145 15.724 C 8.14 15.435 7.95 15.204 7.66 15.204 Z M 12.89 15.191 C 12.65 15.191 12.502 15.346 12.467 15.578 L 13.317 15.578 C 13.277 15.324 13.122 15.191 12.89 15.191 Z M 17.688 15.204 C 17.385 15.204 17.204 15.435 17.204 15.724 C 17.204 16.014 17.386 16.245 17.688 16.245 C 17.991 16.245 18.187 16.027 18.187 15.724 C 18.187 15.435 17.99 15.204 17.688 15.204 Z M 22.401 16.365 C 22.401 16.379 22.415 16.388 22.415 16.414 C 22.415 16.428 22.401 16.437 22.401 16.463 C 22.388 16.477 22.388 16.485 22.379 16.498 C 22.365 16.512 22.356 16.521 22.33 16.521 C 22.316 16.534 22.308 16.534 22.281 16.534 C 22.267 16.534 22.259 16.534 22.232 16.521 C 22.219 16.521 22.21 16.507 22.197 16.498 C 22.183 16.485 22.175 16.476 22.175 16.463 C 22.161 16.441 22.161 16.428 22.161 16.414 C 22.161 16.392 22.161 16.379 22.175 16.365 C 22.175 16.343 22.188 16.33 22.197 16.316 C 22.211 16.303 22.219 16.303 22.232 16.294 C 22.255 16.28 22.267 16.28 22.281 16.28 C 22.304 16.28 22.316 16.28 22.33 16.294 C 22.352 16.307 22.365 16.307 22.379 16.316 C 22.392 16.326 22.388 16.343 22.401 16.365 Z M 22.304 16.428 C 22.326 16.428 22.326 16.414 22.339 16.414 C 22.352 16.401 22.352 16.392 22.352 16.379 C 22.352 16.366 22.352 16.356 22.339 16.344 C 22.326 16.344 22.316 16.33 22.29 16.33 L 22.219 16.33 L 22.219 16.485 L 22.254 16.485 L 22.254 16.423 L 22.267 16.423 L 22.316 16.485 L 22.352 16.485 L 22.304 16.428 Z M 25.637 2.137 L 25.637 15.667 C 25.637 16.846 24.681 17.804 23.5 17.804 L 2.137 17.804 C 0.957 17.804 0 16.847 0 15.667 L 0 2.137 C 0 0.957 0.957 0 2.137 0 L 23.5 0 C 24.68 0 25.637 0.957 25.637 2.137 Z M 2.85 7.281 C 2.85 10.686 5.614 13.445 9.014 13.445 C 10.224 13.445 11.412 13.08 12.418 12.417 C 9.174 9.778 9.196 4.798 12.418 2.158 C 11.412 1.491 10.224 1.13 9.014 1.13 C 5.614 1.126 2.85 3.889 2.85 7.281 Z M 12.819 12.124 C 15.957 9.676 15.943 4.905 12.819 2.444 C 9.695 4.905 9.681 9.681 12.819 12.124 Z M 6.485 15.52 C 6.485 15.133 6.231 14.879 5.831 14.866 C 5.626 14.866 5.408 14.928 5.261 15.155 C 5.154 14.972 4.972 14.866 4.718 14.866 C 4.549 14.866 4.38 14.928 4.246 15.106 L 4.246 14.91 L 3.881 14.91 L 3.881 16.544 L 4.246 16.544 C 4.246 15.703 4.135 15.2 4.647 15.2 C 5.101 15.2 5.012 15.654 5.012 16.544 L 5.364 16.544 C 5.364 15.729 5.252 15.2 5.764 15.2 C 6.218 15.2 6.129 15.645 6.129 16.544 L 6.494 16.544 L 6.494 15.52 L 6.485 15.52 Z M 8.484 14.91 L 8.132 14.91 L 8.132 15.106 C 8.012 14.959 7.843 14.866 7.612 14.866 C 7.153 14.866 6.802 15.231 6.802 15.724 C 6.802 16.223 7.153 16.583 7.612 16.583 C 7.843 16.583 8.012 16.498 8.132 16.343 L 8.132 16.548 L 8.484 16.548 L 8.484 14.91 Z M 10.287 16.05 C 10.287 15.382 9.268 15.684 9.268 15.373 C 9.268 15.119 9.797 15.16 10.091 15.324 L 10.238 15.035 C 9.819 14.763 8.893 14.768 8.893 15.4 C 8.893 16.036 9.912 15.769 9.912 16.067 C 9.912 16.348 9.312 16.325 8.991 16.103 L 8.836 16.383 C 9.334 16.721 10.287 16.65 10.287 16.05 Z M 11.862 16.463 L 11.765 16.16 C 11.596 16.253 11.221 16.356 11.221 15.978 L 11.221 15.239 L 11.805 15.239 L 11.805 14.91 L 11.221 14.91 L 11.221 14.411 L 10.856 14.411 L 10.856 14.91 L 10.518 14.91 L 10.518 15.235 L 10.856 15.235 L 10.856 15.978 C 10.856 16.762 11.626 16.619 11.862 16.463 Z M 12.454 15.867 L 13.678 15.867 C 13.678 15.146 13.348 14.861 12.903 14.861 C 12.431 14.861 12.093 15.212 12.093 15.72 C 12.093 16.632 13.099 16.783 13.598 16.352 L 13.429 16.085 C 13.082 16.37 12.556 16.343 12.454 15.867 Z M 15.085 14.91 C 14.88 14.821 14.569 14.83 14.408 15.106 L 14.408 14.91 L 14.043 14.91 L 14.043 16.544 L 14.408 16.544 L 14.408 15.623 C 14.408 15.106 14.831 15.173 14.978 15.248 L 15.085 14.91 Z M 15.556 15.724 C 15.556 15.216 16.073 15.052 16.478 15.35 L 16.647 15.061 C 16.13 14.656 15.191 14.878 15.191 15.728 C 15.191 16.61 16.188 16.787 16.647 16.396 L 16.478 16.107 C 16.068 16.396 15.556 16.223 15.556 15.724 Z M 18.525 14.91 L 18.159 14.91 L 18.159 15.106 C 17.79 14.616 16.829 14.893 16.829 15.724 C 16.829 16.579 17.825 16.824 18.159 16.343 L 18.159 16.548 L 18.525 16.548 L 18.525 14.91 Z M 20.024 14.91 C 19.918 14.857 19.535 14.781 19.348 15.106 L 19.348 14.91 L 18.996 14.91 L 18.996 16.544 L 19.348 16.544 L 19.348 15.623 C 19.348 15.133 19.749 15.164 19.918 15.248 L 20.024 14.91 Z M 21.818 14.247 L 21.466 14.247 L 21.466 15.106 C 21.101 14.621 20.136 14.879 20.136 15.724 C 20.136 16.588 21.137 16.819 21.466 16.343 L 21.466 16.548 L 21.818 16.548 L 21.818 14.247 Z M 22.157 10.905 L 22.157 11.11 L 22.192 11.11 L 22.192 10.905 L 22.276 10.905 L 22.276 10.87 L 22.071 10.87 L 22.071 10.905 L 22.157 10.905 Z M 22.45 16.414 C 22.45 16.392 22.45 16.365 22.437 16.343 C 22.424 16.329 22.415 16.308 22.402 16.294 C 22.389 16.28 22.367 16.272 22.353 16.259 C 22.331 16.259 22.304 16.245 22.282 16.245 C 22.268 16.245 22.247 16.259 22.219 16.259 C 22.197 16.272 22.184 16.281 22.171 16.294 C 22.148 16.307 22.135 16.329 22.135 16.343 C 22.122 16.365 22.122 16.392 22.122 16.414 C 22.122 16.428 22.122 16.449 22.135 16.477 C 22.135 16.49 22.149 16.512 22.171 16.526 C 22.183 16.539 22.193 16.548 22.219 16.561 C 22.242 16.574 22.268 16.574 22.282 16.574 C 22.304 16.574 22.331 16.574 22.353 16.561 C 22.367 16.547 22.388 16.538 22.402 16.526 C 22.416 16.513 22.425 16.49 22.437 16.477 C 22.45 16.45 22.45 16.428 22.45 16.414 Z M 22.593 10.865 L 22.53 10.865 L 22.459 11.02 L 22.388 10.865 L 22.325 10.865 L 22.325 11.105 L 22.36 11.105 L 22.36 10.922 L 22.432 11.078 L 22.481 11.078 L 22.543 10.922 L 22.543 11.105 L 22.592 11.105 L 22.593 10.865 Z M 22.788 7.281 C 22.788 3.889 20.024 1.126 16.624 1.126 C 15.414 1.126 14.226 1.491 13.219 2.154 C 16.429 4.794 16.478 9.787 13.219 12.413 C 14.226 13.081 15.423 13.441 16.624 13.441 C 20.024 13.446 22.788 10.686 22.788 7.281 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25.636,
      height: 16.1,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.636,
    height: 16.100,
    viewBox: "0 0 25.636 16.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.636,
      height: 16.1,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.964 C 1.354 0.964 0.986 1.324 0.986 1.767 L 0.986 14.332 C 0.986 14.776 1.354 15.136 1.808 15.136 L 23.829 15.136 C 24.282 15.136 24.65 14.776 24.65 14.332 L 24.65 1.767 C 24.65 1.324 24.282 0.964 23.829 0.964 L 1.808 0.964 Z M 1.808 0 L 23.829 0 C 24.827 0 25.636 0.791 25.636 1.767 L 25.636 14.332 C 25.636 15.308 24.827 16.1 23.829 16.1 L 1.808 16.1 C 0.809 16.1 0 15.308 0 14.332 L 0 1.767 C 0 0.791 0.809 0 1.808 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.957,
      top: 3.753,
      width: 23.72,
      height: 8.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.620,
    height: 3.877,
    viewBox: "0 0 22.620 3.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.62,
      height: 3.877,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.875 L 1.139 3.875 L 1.396 3.258 L 1.971 3.258 L 2.228 3.875 L 4.469 3.875 L 4.469 3.403 L 4.67 3.877 L 5.833 3.877 L 6.033 3.396 L 6.033 3.875 L 11.605 3.875 L 11.602 2.862 L 11.71 2.862 C 11.785 2.864 11.807 2.871 11.807 2.995 L 11.807 3.875 L 14.689 3.875 L 14.689 3.639 C 14.921 3.763 15.283 3.875 15.758 3.875 L 16.97 3.875 L 17.23 3.258 L 17.805 3.258 L 18.059 3.875 L 20.395 3.875 L 20.395 3.288 L 20.748 3.875 L 22.62 3.875 L 22.62 0 L 20.768 0 L 20.768 0.458 L 20.508 0 L 18.607 0 L 18.607 0.458 L 18.369 0 L 15.801 0 C 15.372 0 14.994 0.06 14.689 0.226 L 14.689 0 L 12.917 0 L 12.917 0.226 C 12.722 0.055 12.458 0 12.164 0 L 5.69 0 L 5.256 1.001 L 4.81 0 L 2.771 0 L 2.771 0.458 L 2.547 0 L 0.808 0 L 0 1.842 L 0 3.875 L 0 3.875 Z M 7.192 3.316 L 6.508 3.316 L 6.506 1.14 L 5.539 3.316 L 4.953 3.316 L 3.984 1.138 L 3.984 3.316 L 2.628 3.316 L 2.371 2.696 L 0.983 2.696 L 0.724 3.316 L 0 3.316 L 1.194 0.538 L 2.185 0.538 L 3.319 3.168 L 3.319 0.538 L 4.407 0.538 L 5.28 2.422 L 6.082 0.538 L 7.192 0.538 L 7.192 3.316 L 7.192 3.316 Z M 2.144 2.119 L 1.687 1.012 L 1.233 2.119 L 2.144 2.119 Z M 9.913 3.316 L 7.685 3.316 L 7.685 0.538 L 9.913 0.538 L 9.913 1.116 L 8.352 1.116 L 8.352 1.617 L 9.875 1.617 L 9.875 2.186 L 8.352 2.186 L 8.352 2.741 L 9.913 2.741 L 9.913 3.316 Z M 13.052 1.286 C 13.052 1.729 12.755 1.958 12.582 2.026 C 12.728 2.082 12.852 2.179 12.912 2.26 C 13.006 2.398 13.022 2.522 13.022 2.77 L 13.022 3.316 L 12.35 3.316 L 12.347 2.965 C 12.347 2.798 12.363 2.558 12.242 2.424 C 12.144 2.326 11.996 2.305 11.756 2.305 L 11.04 2.305 L 11.04 3.316 L 10.373 3.316 L 10.373 0.538 L 11.907 0.538 C 12.248 0.538 12.499 0.547 12.714 0.671 C 12.925 0.795 13.052 0.976 13.052 1.286 Z M 12.209 1.698 C 12.117 1.754 12.009 1.756 11.879 1.756 L 11.069 1.756 L 11.069 1.139 L 11.89 1.139 C 12.006 1.139 12.127 1.144 12.206 1.189 C 12.293 1.229 12.346 1.315 12.346 1.434 C 12.346 1.556 12.295 1.653 12.209 1.698 Z M 14.121 3.316 L 13.441 3.316 L 13.441 0.538 L 14.121 0.538 L 14.121 3.316 Z M 22.02 3.316 L 21.075 3.316 L 19.811 1.231 L 19.811 3.316 L 18.453 3.316 L 18.193 2.696 L 16.808 2.696 L 16.556 3.316 L 15.776 3.316 C 15.452 3.316 15.041 3.244 14.809 3.008 C 14.575 2.773 14.453 2.453 14.453 1.948 C 14.453 1.536 14.526 1.159 14.812 0.862 C 15.028 0.64 15.365 0.538 15.825 0.538 L 16.471 0.538 L 16.471 1.133 L 15.838 1.133 C 15.595 1.133 15.458 1.169 15.325 1.297 C 15.212 1.414 15.134 1.636 15.134 1.927 C 15.134 2.224 15.193 2.439 15.317 2.579 C 15.42 2.689 15.606 2.722 15.782 2.722 L 16.081 2.722 L 17.021 0.538 L 18.02 0.538 L 19.149 3.165 L 19.149 0.538 L 20.165 0.538 L 21.337 2.472 L 21.337 0.538 L 22.02 0.538 L 22.02 3.316 Z M 17.966 2.119 L 17.505 1.012 L 17.046 2.119 L 17.966 2.119 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.008,
    height: 3.879,
    viewBox: "0 0 19.008 3.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.712,
      top: 4.775,
      width: 19.008,
      height: 3.879,
      color: "var(--icon-inverted-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.007 2.976 C 18.845 3.212 18.529 3.331 18.102 3.331 L 16.814 3.331 L 16.814 2.736 L 18.097 2.736 C 18.224 2.736 18.313 2.719 18.367 2.667 C 18.413 2.624 18.445 2.561 18.445 2.486 C 18.445 2.405 18.413 2.34 18.364 2.302 C 18.316 2.259 18.245 2.24 18.129 2.24 C 17.503 2.219 16.722 2.259 16.722 1.38 C 16.722 0.977 16.979 0.553 17.678 0.553 L 19.007 0.553 L 19.007 0 L 17.773 0 C 17.4 0 17.13 0.089 16.938 0.227 L 16.938 0 L 15.113 0 C 14.821 0 14.478 0.072 14.316 0.227 L 14.316 0 L 11.056 0 L 11.056 0.227 C 10.797 0.041 10.359 0 10.157 0 L 8.007 0 L 8.007 0.227 C 7.802 0.029 7.345 0 7.067 0 L 4.661 0 L 4.11 0.593 L 3.595 0 L 0 0 L 0 3.877 L 3.527 3.877 L 4.094 3.274 L 4.629 3.877 L 6.803 3.879 L 6.803 2.967 L 7.017 2.967 C 7.305 2.972 7.645 2.96 7.945 2.831 L 7.945 3.877 L 9.739 3.877 L 9.739 2.867 L 9.825 2.867 C 9.935 2.867 9.946 2.871 9.946 2.981 L 9.946 3.877 L 15.394 3.877 C 15.739 3.877 16.101 3.789 16.301 3.629 L 16.301 3.877 L 18.029 3.877 C 18.388 3.877 18.74 3.827 19.007 3.698 L 19.007 2.976 Z M 8.206 1.485 C 8.206 2.257 7.628 2.416 7.045 2.416 L 6.213 2.416 L 6.213 3.348 L 4.917 3.348 L 4.096 2.428 L 3.242 3.348 L 0.601 3.348 L 0.601 0.569 L 3.283 0.569 L 4.103 1.48 L 4.951 0.569 L 7.082 0.569 C 7.611 0.569 8.206 0.715 8.206 1.485 Z M 2.905 2.763 L 1.265 2.763 L 1.265 2.211 L 2.729 2.211 L 2.729 1.644 L 1.265 1.644 L 1.265 1.139 L 2.937 1.139 L 3.666 1.948 L 2.905 2.763 Z M 5.546 3.082 L 4.522 1.95 L 5.546 0.854 L 5.546 3.082 Z M 7.06 1.846 L 6.199 1.846 L 6.199 1.139 L 7.068 1.139 C 7.309 1.139 7.476 1.236 7.476 1.479 C 7.476 1.72 7.317 1.846 7.06 1.846 Z M 11.575 0.569 L 13.8 0.569 L 13.8 1.144 L 12.239 1.144 L 12.239 1.649 L 13.762 1.649 L 13.762 2.216 L 12.239 2.216 L 12.239 2.769 L 13.8 2.771 L 13.8 3.348 L 11.575 3.348 L 11.575 0.569 Z M 10.719 2.057 C 10.868 2.111 10.989 2.209 11.046 2.29 C 11.14 2.426 11.154 2.552 11.156 2.797 L 11.156 3.348 L 10.487 3.348 L 10.487 3 C 10.487 2.833 10.503 2.586 10.379 2.456 C 10.282 2.357 10.133 2.333 9.89 2.333 L 9.177 2.333 L 9.177 3.348 L 8.507 3.348 L 8.507 0.569 L 10.047 0.569 C 10.384 0.569 10.63 0.584 10.849 0.7 C 11.06 0.827 11.192 1 11.192 1.317 C 11.192 1.761 10.895 1.987 10.719 2.057 Z M 10.342 1.705 C 10.253 1.758 10.143 1.763 10.013 1.763 L 9.203 1.763 L 9.203 1.139 L 10.024 1.139 C 10.143 1.139 10.262 1.141 10.342 1.189 C 10.429 1.234 10.48 1.32 10.48 1.439 C 10.48 1.558 10.429 1.653 10.342 1.705 Z M 16.362 1.882 C 16.492 2.016 16.562 2.185 16.562 2.471 C 16.562 3.069 16.186 3.348 15.514 3.348 L 14.215 3.348 L 14.215 2.752 L 15.509 2.752 C 15.635 2.752 15.725 2.735 15.781 2.683 C 15.827 2.64 15.86 2.578 15.86 2.502 C 15.86 2.421 15.824 2.357 15.779 2.318 C 15.728 2.276 15.657 2.257 15.541 2.257 C 14.917 2.235 14.137 2.276 14.137 1.397 C 14.137 0.993 14.391 0.569 15.09 0.569 L 16.427 0.569 L 16.427 1.161 L 15.203 1.161 C 15.082 1.161 15.003 1.165 14.936 1.211 C 14.863 1.256 14.836 1.323 14.836 1.411 C 14.836 1.516 14.898 1.587 14.982 1.618 C 15.052 1.642 15.128 1.649 15.242 1.649 L 15.601 1.659 C 15.963 1.668 16.211 1.73 16.362 1.882 Z M 19.008 1.139 L 17.793 1.139 C 17.672 1.139 17.591 1.143 17.523 1.189 C 17.453 1.234 17.426 1.3 17.426 1.389 C 17.426 1.493 17.485 1.565 17.571 1.596 C 17.642 1.62 17.717 1.627 17.828 1.627 L 18.19 1.637 C 18.554 1.646 18.798 1.708 18.946 1.86 C 18.973 1.882 18.99 1.905 19.008 1.929 L 19.008 1.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e8329a5d46a21c6f-f3d97af6",
    style: {
      position: "relative",
      width: 20.295,
      height: 14.965,
      mixBlendMode: "lighten",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-766c0bac5f158721-d965af24",
    style: {
      position: "relative",
      width: 25.636,
      height: 15.713,
      borderRadius: 2.4233274459838867,
      boxShadow: "inset 0 0 0 1.068px var(--stroke-action-inverted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ff756ba7b5fbe6f3",
    style: {
      position: "relative",
      width: 22.432,
      height: 15.903,
      flexShrink: 0
    }
  })));
  const __impls = {
    // figma: Breakpoint=Desktop, State=Default
    "breakpoint=desktop|state=default": __body0,
    // figma: Breakpoint=Desktop, State=Error
    "breakpoint=desktop|state=error": __body1,
    // figma: Breakpoint=Desktop, State=Success
    "breakpoint=desktop|state=success": __body2,
    // figma: Breakpoint=Mobile, State=Default
    "breakpoint=mobile|state=default": __body3,
    // figma: Breakpoint=Mobile, State=Error
    "breakpoint=mobile|state=error": __body4,
    // figma: Breakpoint=Mobile, State=Success
    "breakpoint=mobile|state=success": __body5
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Footer, __ds_default_components_Footer_104r1c9: Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Footer.jsx", error: String((e && e.message) || e) }); }

// components/SecondaryButton.jsx
try { (() => {
// figma node: 1:1751 secondary_button (9 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);
function SecondaryButton(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "l",
    state: _p.state ?? "hover",
    showLabel: _p.showLabel ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 275,
      height: 48,
      borderRadius: 24,
      backgroundColor: "var(--purple-3)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Download24, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Download W-9 form template"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 264,
      height: 40,
      borderRadius: 24,
      backgroundColor: "var(--purple-3)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Download16, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Download W-9 form template"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "var(--purple-3)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 8px 16px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Apply"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Arrow, {
    direction: "right",
    state: "default"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 275,
      height: 48,
      borderRadius: 24,
      backgroundColor: "var(--purple-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Download24, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Download W-9 form template"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 264,
      height: 40,
      borderRadius: 24,
      backgroundColor: "var(--purple-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Download16, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Download W-9 form template"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "var(--purple-2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 8px 16px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Apply"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Arrow, {
    direction: "right",
    state: "default"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 275,
      height: 48,
      borderRadius: 24,
      backgroundColor: "rgb(214,208,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Download24, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Download W-9 form template"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 264,
      height: 40,
      borderRadius: 24,
      backgroundColor: "rgb(214,208,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Download16, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Download W-9 form template"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(214,208,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 8px 16px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--purple-0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Apply"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Arrow, {
    direction: "right",
    state: "default"
  })));
  const __impls = {
    // figma: Size=L, State=idle
    "size=l|state=idle": __body0,
    // figma: Size=M, State=idle
    "size=m|state=idle": __body1,
    // figma: Size=S, State=idle
    "size=s|state=idle": __body2,
    // figma: Size=L, State=hover
    "size=l|state=hover": __body3,
    // figma: Size=M, State=hover
    "size=m|state=hover": __body4,
    // figma: Size=S, State=hover
    "size=s|state=hover": __body5,
    // figma: Size=L, State=active
    "size=l|state=active": __body6,
    // figma: Size=M, State=active
    "size=m|state=active": __body7,
    // figma: Size=S, State=active
    "size=s|state=active": __body8
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
Object.assign(__ds_scope, { SecondaryButton, __ds_default_components_SecondaryButton_105m49q: SecondaryButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SecondaryButton.jsx", error: String((e && e.message) || e) }); }

// components/master002base.jsx
try { (() => {
// figma node: 1:1714 00_master
function Master002(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-base)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.580,
    height: 22.500,
    viewBox: "0 0 20.580 22.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.7,
      top: 0.75,
      width: 20.58,
      height: 22.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.58 5.73 L 20.58 8.93 L 14.85 10.84 L 14.85 22.5 L 11.546 22.5 L 10.559 16.053 L 10.55 15.998 L 10.55 15.94 C 10.55 15.874 10.523 15.81 10.477 15.763 C 10.43 15.716 10.366 15.69 10.3 15.69 C 10.234 15.69 10.17 15.716 10.123 15.763 C 10.076 15.81 10.05 15.874 10.05 15.94 L 10.05 15.999 L 10.041 16.056 L 9.031 22.5 L 5.73 22.5 L 5.73 10.84 L 0 8.93 L 0 5.73 L 20.58 5.73 Z M 7.23 21 L 7.749 21 L 8.554 15.85 C 8.576 15.419 8.756 15.01 9.063 14.703 C 9.391 14.375 9.836 14.19 10.3 14.19 C 10.764 14.19 11.209 14.375 11.537 14.703 C 11.845 15.011 12.024 15.422 12.045 15.856 L 12.834 21 L 13.35 21 L 13.35 9.759 L 19.08 7.849 L 19.08 7.23 L 1.5 7.23 L 1.5 7.849 L 7.23 9.759 L 7.23 21 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.41 3.61 C 12.41 2.445 11.466 1.5 10.3 1.5 C 9.135 1.5 8.19 2.445 8.19 3.61 C 8.19 4.776 9.135 5.72 10.3 5.72 C 11.465 5.72 12.41 4.775 12.41 3.61 Z M 13.91 3.61 C 13.91 5.604 12.294 7.22 10.3 7.22 C 8.307 7.22 6.69 5.604 6.69 3.61 C 6.69 1.617 8.307 0 10.3 0 C 12.294 0 13.91 1.617 13.91 3.61 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { master002base: Master002 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/master002base.jsx", error: String((e && e.message) || e) }); }

// components/TextInput.jsx
try { (() => {
// figma node: 1:1800 text input (10 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint) + '|' + "state=" + __venc(p.state);
function TextInput(_p = {}) {
  const props = {
    ..._p,
    icon: _p.icon ?? false,
    breakpoint: _p.breakpoint ?? "desktop",
    state: _p.state ?? "inactive"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(226,222,253)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-base-subdued)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text label*"), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 17,
      width: 44,
      opacity: 0,
      backgroundColor: "var(--surface-base-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-base-subdued)",
      flexShrink: 0
    }
  }, props.text2 ?? "Country*")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(109,91,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-base-subdued)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(182,173,251)"
    }
  }, "|"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(91,91,93)"
    }
  }, "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: -6,
      backgroundColor: "var(--surface-base-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-base-subdued)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text label*")), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-base-default)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: -6,
      backgroundColor: "var(--surface-base-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-base-subdued)",
      flexShrink: 0
    }
  }, props.text2 ?? "Text label*")), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--stroke-error-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-base-default)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: -6,
      backgroundColor: "var(--surface-base-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-base-subdued)",
      flexShrink: 0
    }
  }, props.text2 ?? "Text label*")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-error-default)"
    }
  }, props.text3 ?? "This is an error description."), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      height: 48,
      opacity: 0.6,
      borderRadius: 4,
      backgroundColor: "rgb(246,245,253)",
      boxShadow: "inset 0 0 0 1px rgb(226,222,253)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-base-subdued)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text label*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 17,
      width: 44,
      opacity: 0,
      backgroundColor: "var(--surface-base-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-base-subdued)",
      flexShrink: 0
    }
  }, props.text2 ?? "Country*")), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(226,222,253)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "23px",
      color: "var(--text-base-subdued-2)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text label*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 17,
      width: 44,
      opacity: 0,
      backgroundColor: "var(--surface-base-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-base-subdued-2)",
      flexShrink: 0
    }
  }, props.text2 ?? "Country*")), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(109,91,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "23px",
      color: "var(--text-base-subdued-2)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(182,173,251)"
    }
  }, "|"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(91,91,93)"
    }
  }, "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: -6,
      backgroundColor: "var(--surface-base-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "var(--text-base-subdued-2)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text label*")), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: -6,
      backgroundColor: "var(--surface-base-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "var(--text-base-subdued-2)",
      flexShrink: 0
    }
  }, props.text2 ?? "Text label*")), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--stroke-error-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: -6,
      backgroundColor: "var(--surface-base-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "var(--text-base-subdued-2)",
      flexShrink: 0
    }
  }, props.text2 ?? "Text label*")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 54,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "var(--text-error-default)"
    }
  }, props.text3 ?? "This is an error description."), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 48,
      opacity: 0.6,
      borderRadius: 4,
      backgroundColor: "rgb(246,245,253)",
      boxShadow: "inset 0 0 0 1px rgb(226,222,253)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "23px",
      color: "var(--text-base-subdued-2)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text label*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 17,
      width: 44,
      opacity: 0,
      backgroundColor: "var(--surface-base-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-base-subdued-2)",
      flexShrink: 0
    }
  }, props.text2 ?? "Country*")), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(109,91,247)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.master002base, null)));
  const __impls = {
    // figma: Breakpoint=Desktop, State=Inactive
    "breakpoint=desktop|state=inactive": __body0,
    // figma: Breakpoint=Desktop, State=Focused
    "breakpoint=desktop|state=focused": __body1,
    // figma: Breakpoint=Desktop, State=Enabled
    "breakpoint=desktop|state=enabled": __body2,
    // figma: Breakpoint=Desktop, State=Error
    "breakpoint=desktop|state=error": __body3,
    // figma: Breakpoint=Desktop, State=Disabled
    "breakpoint=desktop|state=disabled": __body4,
    // figma: Breakpoint=Mobile, State=Inactive
    "breakpoint=mobile|state=inactive": __body5,
    // figma: Breakpoint=Mobile, State=Focused
    "breakpoint=mobile|state=focused": __body6,
    // figma: Breakpoint=Mobile, State=Enabled
    "breakpoint=mobile|state=enabled": __body7,
    // figma: Breakpoint=Mobile, State=Error
    "breakpoint=mobile|state=error": __body8,
    // figma: Breakpoint=Mobile, State=Disabled
    "breakpoint=mobile|state=disabled": __body9
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { TextInput, __ds_default_components_TextInput_idww27: TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/master00base.jsx
try { (() => {
// figma node: 1:48 00_master
function Master00(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-base-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.580,
    height: 22.500,
    viewBox: "0 0 20.580 22.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.7,
      top: 0.75,
      width: 20.58,
      height: 22.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.58 5.73 L 20.58 8.93 L 14.85 10.84 L 14.85 22.5 L 11.546 22.5 L 10.559 16.053 L 10.55 15.998 L 10.55 15.94 C 10.55 15.874 10.523 15.81 10.477 15.763 C 10.43 15.716 10.366 15.69 10.3 15.69 C 10.234 15.69 10.17 15.716 10.123 15.763 C 10.076 15.81 10.05 15.874 10.05 15.94 L 10.05 15.999 L 10.041 16.056 L 9.031 22.5 L 5.73 22.5 L 5.73 10.84 L 0 8.93 L 0 5.73 L 20.58 5.73 Z M 7.23 21 L 7.749 21 L 8.554 15.85 C 8.576 15.419 8.756 15.01 9.063 14.703 C 9.391 14.375 9.836 14.19 10.3 14.19 C 10.764 14.19 11.209 14.375 11.537 14.703 C 11.845 15.011 12.024 15.422 12.045 15.856 L 12.834 21 L 13.35 21 L 13.35 9.759 L 19.08 7.849 L 19.08 7.23 L 1.5 7.23 L 1.5 7.849 L 7.23 9.759 L 7.23 21 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.41 3.61 C 12.41 2.445 11.466 1.5 10.3 1.5 C 9.135 1.5 8.19 2.445 8.19 3.61 C 8.19 4.776 9.135 5.72 10.3 5.72 C 11.465 5.72 12.41 4.775 12.41 3.61 Z M 13.91 3.61 C 13.91 5.604 12.294 7.22 10.3 7.22 C 8.307 7.22 6.69 5.604 6.69 3.61 C 6.69 1.617 8.307 0 10.3 0 C 12.294 0 13.91 1.617 13.91 3.61 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { master00base: Master00 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/master00base.jsx", error: String((e && e.message) || e) }); }

// components/Button.jsx
try { (() => {
// figma node: 1:113 Button (60 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint) + '|' + "kind=" + __venc(p.kind) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);
function Button(_p = {}) {
  const props = {
    ..._p,
    iconLead: _p.iconLead ?? false,
    breakpoint: _p.breakpoint ?? "desktop",
    kind: _p.kind ?? "highlight",
    state: _p.state ?? "enabled",
    iconTail: _p.iconTail ?? false,
    size: _p.size ?? "l"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--icon-base-default) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--icon-base-default) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      height: 58,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      height: 74,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--icon-base-default) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--icon-base-default) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(224,224,224)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      height: 58,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(224,224,224)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--icon-base-default) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--icon-base-default) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      height: 58,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-focused)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--icon-base-default) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--icon-base-default) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      height: 58,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-focused)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      opacity: 0.6,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--icon-base-default) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--icon-base-default) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 346,
      height: 58,
      opacity: 0.6,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--text-base-default) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--icon-base-default) * 1px)",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingRight: "calc(var(--icon-base-default) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(38,38,38)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading, null)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(224,224,224)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(38,38,38)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading, null)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(224,224,224)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading, null)));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-focused)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-focused)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem) * 1px)",
      paddingBottom: "calc(var(--0-75rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-focused)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-inverted-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-focused)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem) * 1px)",
      paddingBottom: "calc(var(--0-5rem) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-hover-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-focused-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      height: 47,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem-2) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading2, null)));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-hover-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-focused-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-highlight-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem-2) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading2, null)));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-hover-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-focused-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      height: 47,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem-2) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(38,38,38)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading2, null)));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-hover-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-focused-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-inverted-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-inverted-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      backgroundColor: "var(--action-primary-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem-2) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(38,38,38)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading2, null)));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-hover-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-focused-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      height: 47,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem-2) * 1px)",
      padding: "12px 36px 12px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-75rem-2) * 1px)",
      paddingBottom: "calc(var(--0-75rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(224,224,224)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading2, null)));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-hover-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-focused-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      opacity: 0.6,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 225,
      borderRadius: 36,
      boxShadow: "inset 0 0 0 1px var(--stroke-action-default-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-75rem-2) * 1px)",
      padding: "8px 36px 8px 36px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--0-5rem-2) * 1px)",
      paddingBottom: "calc(var(--0-5rem-2) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(224,224,224)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Loading2, null)));
  const __impls = {
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=L, State=Enabled
    "breakpoint=desktop|kind=highlight|state=enabled|size=l": __body0,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=S, State=Enabled
    "breakpoint=desktop|kind=highlight|state=enabled|size=s": __body1,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=L, State=Loading
    "breakpoint=desktop|kind=highlight|state=loading|size=l": __body2,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=S, State=Loading
    "breakpoint=desktop|kind=highlight|state=loading|size=s": __body3,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=L, State=Hover
    "breakpoint=desktop|kind=highlight|state=hover|size=l": __body4,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=S, State=Hover
    "breakpoint=desktop|kind=highlight|state=hover|size=s": __body5,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=L, State=Focused
    "breakpoint=desktop|kind=highlight|state=focused|size=l": __body6,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=S, State=Focused
    "breakpoint=desktop|kind=highlight|state=focused|size=s": __body7,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=L, State=Disabled
    "breakpoint=desktop|kind=highlight|state=disabled|size=l": __body8,
    // figma: Breakpoint=Desktop, Kind=Highlight, Size=S, State=Disabled
    "breakpoint=desktop|kind=highlight|state=disabled|size=s": __body9,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=L, State=Enabled
    "breakpoint=desktop|kind=primary|state=enabled|size=l": __body10,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=L, State=Enabled
    "breakpoint=desktop|kind=secondary|state=enabled|size=l": __body11,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=S, State=Enabled
    "breakpoint=desktop|kind=primary|state=enabled|size=s": __body12,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=S, State=Enabled
    "breakpoint=desktop|kind=secondary|state=enabled|size=s": __body13,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=L, State=Loading
    "breakpoint=desktop|kind=primary|state=loading|size=l": __body14,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=L, State=Loading
    "breakpoint=desktop|kind=secondary|state=loading|size=l": __body15,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=S, State=Loading
    "breakpoint=desktop|kind=primary|state=loading|size=s": __body16,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=S, State=Loading
    "breakpoint=desktop|kind=secondary|state=loading|size=s": __body17,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=L, State=Disabled
    "breakpoint=desktop|kind=primary|state=disabled|size=l": __body18,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=L, State=Disabled
    "breakpoint=desktop|kind=secondary|state=disabled|size=l": __body19,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=S, State=Disabled
    "breakpoint=desktop|kind=primary|state=disabled|size=s": __body20,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=S, State=Disabled
    "breakpoint=desktop|kind=secondary|state=disabled|size=s": __body21,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=L, State=Hover
    "breakpoint=desktop|kind=primary|state=hover|size=l": __body22,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=L, State=Hover
    "breakpoint=desktop|kind=secondary|state=hover|size=l": __body23,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=S, State=Hover
    "breakpoint=desktop|kind=primary|state=hover|size=s": __body24,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=S, State=Hover
    "breakpoint=desktop|kind=secondary|state=hover|size=s": __body25,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=L, State=Focused
    "breakpoint=desktop|kind=primary|state=focused|size=l": __body26,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=L, State=Focused
    "breakpoint=desktop|kind=secondary|state=focused|size=l": __body27,
    // figma: Breakpoint=Desktop, Kind=Primary, Size=S, State=Focused
    "breakpoint=desktop|kind=primary|state=focused|size=s": __body28,
    // figma: Breakpoint=Desktop, Kind=Secondary, Size=S, State=Focused
    "breakpoint=desktop|kind=secondary|state=focused|size=s": __body29,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=L, State=Enabled
    "breakpoint=mobile|kind=highlight|state=enabled|size=l": __body30,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=L, State=Hover
    "breakpoint=mobile|kind=highlight|state=hover|size=l": __body31,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=L, State=Focused
    "breakpoint=mobile|kind=highlight|state=focused|size=l": __body32,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=L, State=Disabled
    "breakpoint=mobile|kind=highlight|state=disabled|size=l": __body33,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=L, State=Loading
    "breakpoint=mobile|kind=highlight|state=loading|size=l": __body34,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=S, State=Enabled
    "breakpoint=mobile|kind=highlight|state=enabled|size=s": __body35,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=S, State=Hover
    "breakpoint=mobile|kind=highlight|state=hover|size=s": __body36,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=S, State=Focused
    "breakpoint=mobile|kind=highlight|state=focused|size=s": __body37,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=S, State=Disabled
    "breakpoint=mobile|kind=highlight|state=disabled|size=s": __body38,
    // figma: Breakpoint=Mobile, Kind=Highlight, Size=S, State=Loading
    "breakpoint=mobile|kind=highlight|state=loading|size=s": __body39,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=L, State=Enabled
    "breakpoint=mobile|kind=primary|state=enabled|size=l": __body40,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=L, State=Hover
    "breakpoint=mobile|kind=primary|state=hover|size=l": __body41,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=L, State=Focused
    "breakpoint=mobile|kind=primary|state=focused|size=l": __body42,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=L, State=Disabled
    "breakpoint=mobile|kind=primary|state=disabled|size=l": __body43,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=L, State=Loading
    "breakpoint=mobile|kind=primary|state=loading|size=l": __body44,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=S, State=Enabled
    "breakpoint=mobile|kind=primary|state=enabled|size=s": __body45,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=S, State=Hover
    "breakpoint=mobile|kind=primary|state=hover|size=s": __body46,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=S, State=Focused
    "breakpoint=mobile|kind=primary|state=focused|size=s": __body47,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=S, State=Disabled
    "breakpoint=mobile|kind=primary|state=disabled|size=s": __body48,
    // figma: Breakpoint=Mobile, Kind=Primary, Size=S, State=Loading
    "breakpoint=mobile|kind=primary|state=loading|size=s": __body49,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=L, State=Enabled
    "breakpoint=mobile|kind=secondary|state=enabled|size=l": __body50,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=L, State=Hover
    "breakpoint=mobile|kind=secondary|state=hover|size=l": __body51,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=L, State=Focused
    "breakpoint=mobile|kind=secondary|state=focused|size=l": __body52,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=L, State=Disabled
    "breakpoint=mobile|kind=secondary|state=disabled|size=l": __body53,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=L, State=Loading
    "breakpoint=mobile|kind=secondary|state=loading|size=l": __body54,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=S, State=Enabled
    "breakpoint=mobile|kind=secondary|state=enabled|size=s": __body55,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=S, State=Hover
    "breakpoint=mobile|kind=secondary|state=hover|size=s": __body56,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=S, State=Focused
    "breakpoint=mobile|kind=secondary|state=focused|size=s": __body57,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=S, State=Disabled
    "breakpoint=mobile|kind=secondary|state=disabled|size=s": __body58,
    // figma: Breakpoint=Mobile, Kind=Secondary, Size=S, State=Loading
    "breakpoint=mobile|kind=secondary|state=loading|size=s": __body59
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Button, __ds_default_components_Button_xnw6d2: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/Link.jsx
try { (() => {
// figma node: 1:1409 Link (16 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);
function Link(_p = {}) {
  const props = {
    ..._p,
    iconLead: _p.iconLead ?? false,
    breakpoint: _p.breakpoint ?? "desktop",
    size: _p.size ?? "l",
    iconTail: _p.iconTail ?? false,
    state: _p.state ?? "enabled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(95,75,245)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(109,91,247)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(95,75,245)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(109,91,247)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "var(--icon-base-default)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--text-base-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "var(--icon-base-default)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem-2) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "rgb(95,75,245)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(109,91,247)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem-2) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem-2) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "23px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem-2) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(109,91,247)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "rgb(95,75,245)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(109,91,247)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem-2) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--0-5rem-2) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.iconLead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "var(--icon-base-default-2)"
    }
  }, props.l ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hurme Geometric Sans 3\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19px",
      color: "var(--text-base-default-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link text"), props.iconTail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "var(--icon-base-default-2)"
    }
  }, props.t ?? /*#__PURE__*/React.createElement(__ds_scope.master00base, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __impls = {
    // figma: Breakpoint=Desktop, Size=L, State=Enabled
    "breakpoint=desktop|size=l|state=enabled": __body0,
    // figma: Breakpoint=Desktop, Size=S, State=Enabled
    "breakpoint=desktop|size=s|state=enabled": __body1,
    // figma: Breakpoint=Desktop, Size=L, State=Disabled
    "breakpoint=desktop|size=l|state=disabled": __body2,
    // figma: Breakpoint=Desktop, Size=S, State=Disabled
    "breakpoint=desktop|size=s|state=disabled": __body3,
    // figma: Breakpoint=Desktop, Size=L, State=Hover
    "breakpoint=desktop|size=l|state=hover": __body4,
    // figma: Breakpoint=Desktop, Size=S, State=Hover
    "breakpoint=desktop|size=s|state=hover": __body5,
    // figma: Breakpoint=Desktop, Size=L, State=Visited
    "breakpoint=desktop|size=l|state=visited": __body0,
    // figma: Breakpoint=Desktop, Size=S, State=Visited
    "breakpoint=desktop|size=s|state=visited": __body1,
    // figma: Breakpoint=Mobile, Size=L, State=Enabled
    "breakpoint=mobile|size=l|state=enabled": __body6,
    // figma: Breakpoint=Mobile, Size=L, State=Hover
    "breakpoint=mobile|size=l|state=hover": __body7,
    // figma: Breakpoint=Mobile, Size=L, State=Disabled
    "breakpoint=mobile|size=l|state=disabled": __body8,
    // figma: Breakpoint=Mobile, Size=L, State=Visited
    "breakpoint=mobile|size=l|state=visited": __body6,
    // figma: Breakpoint=Mobile, Size=S, State=Enabled
    "breakpoint=mobile|size=s|state=enabled": __body9,
    // figma: Breakpoint=Mobile, Size=S, State=Hover
    "breakpoint=mobile|size=s|state=hover": __body10,
    // figma: Breakpoint=Mobile, Size=S, State=Disabled
    "breakpoint=mobile|size=s|state=disabled": __body11,
    // figma: Breakpoint=Mobile, Size=S, State=Visited
    "breakpoint=mobile|size=s|state=visited": __body9
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Link, __ds_default_components_Link_182b0o8: Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Link.jsx", error: String((e && e.message) || e) }); }

// icons/canvas.jsx
try { (() => {
const {
  DesignCanvas,
  DCSection,
  DCArtboard
} = window;

// Render an icon at multiple sizes inside one cell so reviewer sees scale behavior
function ScaleStrip({
  Comp
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "icon-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-mark"
  }, /*#__PURE__*/React.createElement(Comp, {
    size: 240
  })), /*#__PURE__*/React.createElement("div", {
    className: "scale-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-mark sm"
  }, /*#__PURE__*/React.createElement(Comp, {
    size: 96
  })), /*#__PURE__*/React.createElement("div", {
    className: "icon-mark xs"
  }, /*#__PURE__*/React.createElement(Comp, {
    size: 48
  }))));
}

// Wordmark cell: icon + "MultiNyx" wordmark
function WordmarkCell({
  Comp,
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wm-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wm-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-mark"
  }, /*#__PURE__*/React.createElement(Comp, {
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 56px/1 "Archivo", sans-serif',
      letterSpacing: '-0.025em',
      color: '#f4f1ea'
    }
  }, "MultiNyx")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1 "JetBrains Mono", monospace',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#9a9a9f',
      marginTop: 6
    }
  }, name));
}
function App() {
  const icons = window.MultiNyxIcons;
  return /*#__PURE__*/React.createElement(DesignCanvas, {
    title: "MultiNyx \u2014 App Icon Options",
    subtitle: "12 directions \xB7 taskbar / app-tile use \xB7 rounded square"
  }, /*#__PURE__*/React.createElement(DCSection, {
    id: "marks",
    title: "Icon marks (240 / 96 / 48 px)"
  }, icons.map(({
    id,
    name,
    tagline,
    Comp
  }) => /*#__PURE__*/React.createElement(DCArtboard, {
    key: id,
    id: `mark-${id}`,
    label: `${id}  ·  ${name} — ${tagline}`,
    width: 420,
    height: 520
  }, /*#__PURE__*/React.createElement(ScaleStrip, {
    Comp: Comp
  })))), /*#__PURE__*/React.createElement(DCSection, {
    id: "wordmarks",
    title: "With wordmark"
  }, icons.map(({
    id,
    name,
    Comp
  }) => /*#__PURE__*/React.createElement(DCArtboard, {
    key: id,
    id: `wm-${id}`,
    label: `${id}  ·  ${name} — wordmark lockup`,
    width: 620,
    height: 260
  }, /*#__PURE__*/React.createElement(WordmarkCell, {
    Comp: Comp,
    name: name
  })))));
}
ReactDOM.createRoot(document.getElementById('canvas-root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "icons/canvas.jsx", error: String((e && e.message) || e) }); }

// icons/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), labels/titles are inline-editable,
// and any artboard can be opened in a fullscreen focus overlay (←/→/Esc).
// State persists to a .design-canvas.state.json sidecar via the host
// bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}', '.dc-card{transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px}', '.dc-grip{cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{cursor:pointer;border-radius:4px;padding:3px 6px;display:flex;align-items:center;transition:background .12s}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-expand{position:absolute;bottom:100%;right:0;margin-bottom:5px;z-index:2;opacity:0;transition:opacity .12s,background .12s;', '  width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center}', '.dc-expand:hover{background:rgba(0,0,0,.06);color:#2a251f}', '[data-dc-slot]:hover .dc-expand{opacity:1}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, focused
// artboard). Order/titles/labels persist to a .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Only direct DCSection > DCArtboard children are
  // walked — wrapping them in other elements opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  React.Children.forEach(children, sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const srcIds = [];
    React.Children.forEach(sec.props.children, ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (!aid) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(children);
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const srcOrder = artboards.map(a => a.props.id ?? a.props.label);
  const sec = ctx && sid && ctx.section(sid) || {};
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px 56px'
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow",
    style: {
      position: 'absolute',
      bottom: '100%',
      left: -4,
      marginBottom: 4,
      color: DC.label
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    onPointerDown: e => e.stopPropagation(),
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    const ns = sectionOrder[(secIdx + d + sectionOrder.length) % sectionOrder.length];
    const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
    if (first) ctx.setFocus(`${ns}/${first}`);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "icons/design-canvas.jsx", error: String((e && e.message) || e) }); }

// icons/icons.jsx
try { (() => {
// 12 MultiNyx icon directions — each is a positioned absolute layer system inside .icon-mark
// Naming: Icon01, Icon02, ... — each renders the SVG/CSS interior, NOT the rounded-square wrapper

// Shared helpers
const Bg = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    ...style
  }
}, children);

// ─── 01. Editorial — cream + ink + yellow stripe (deck DNA) ──────────────────
const Icon01 = ({
  size = 240
}) => {
  const s = size / 240;
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#F4F1EA'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      height: 14 * s,
      background: '#F5D547'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30 * s,
      top: 50 * s,
      font: `800 ${110 * s}px/0.85 'Archivo', sans-serif`,
      color: '#0E0E10',
      letterSpacing: '-0.04em'
    }
  }, "M"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 110 * s,
      top: 110 * s,
      font: `800 ${110 * s}px/0.85 'Archivo', sans-serif`,
      color: '#0E0E10',
      letterSpacing: '-0.04em'
    }
  }, "n"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30 * s,
      bottom: 26 * s,
      font: `700 ${13 * s}px/1 'JetBrains Mono', monospace`,
      letterSpacing: '0.22em',
      color: '#0E0E10',
      opacity: 0.55
    }
  }, "MULTINYX"));
};

// ─── 02. Bold ink M with yellow underline (architectural monogram) ───────────
const Icon02 = ({
  size = 240
}) => {
  const s = size / 240;
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#0E0E10'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50 60 L 50 180 M 50 60 L 120 140 L 190 60 M 190 60 L 190 180",
    stroke: "#F4F1EA",
    strokeWidth: "22",
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "50",
    y: "195",
    width: "140",
    height: "6",
    fill: "#F5D547"
  })));
};

// ─── 03. Fan-out — one node branches to many (parallel concept) ─────────────
const Icon03 = ({
  size = 240
}) => {
  const s = size / 240;
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: 'linear-gradient(160deg, #F5D547 0%, #E8B92C 100%)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60 120 L 180 50 M 60 120 L 180 95 M 60 120 L 180 145 M 60 120 L 180 190",
    stroke: "#0E0E10",
    strokeWidth: "10",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "120",
    r: "20",
    fill: "#0E0E10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "180",
    cy: "50",
    r: "11",
    fill: "#0E0E10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "180",
    cy: "95",
    r: "11",
    fill: "#0E0E10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "180",
    cy: "145",
    r: "11",
    fill: "#0E0E10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "180",
    cy: "190",
    r: "11",
    fill: "#0E0E10"
  })));
};

// ─── 04. Parallel bars — 4 vertical bars, one yellow (the "lit" one) ────────
const Icon04 = ({
  size = 240
}) => {
  const s = size / 240;
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#1B1B1F'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "46",
    y: "64",
    width: "28",
    height: "112",
    fill: "#F4F1EA",
    rx: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "92",
    y: "48",
    width: "28",
    height: "144",
    fill: "#F4F1EA",
    rx: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "138",
    y: "64",
    width: "28",
    height: "112",
    fill: "#F5D547",
    rx: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "184",
    y: "80",
    width: "28",
    height: "80",
    fill: "#F4F1EA",
    rx: "3"
  })));
};

// ─── 05. Hex grid of devices — 7 hexes, center one yellow ───────────────────
const Icon05 = ({
  size = 240
}) => {
  const hex = (cx, cy, r, fill) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = Math.PI / 3 * i + Math.PI / 6;
      pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
    }
    return /*#__PURE__*/React.createElement("polygon", {
      points: pts.join(' '),
      fill: fill
    });
  };
  const r = 30,
    dx = r * Math.sqrt(3),
    dy = r * 1.5;
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#0E0E10'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, hex(120, 120, r, '#F5D547'), hex(120 - dx, 120, r, '#F4F1EA'), hex(120 + dx, 120, r, '#F4F1EA'), hex(120 - dx / 2, 120 - dy * 1.7, r, '#F4F1EA'), hex(120 + dx / 2, 120 - dy * 1.7, r, '#F4F1EA'), hex(120 - dx / 2, 120 + dy * 1.7, r, '#F4F1EA'), hex(120 + dx / 2, 120 + dy * 1.7, r, '#F4F1EA')));
};

// ─── 06. M as parallel paths — modern monogram (electric blue + ink) ────────
const Icon06 = ({
  size = 240
}) => {
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#0A1628'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "g6",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#5EEAD4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#3B82F6"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M 50 180 L 50 60 L 120 140 L 190 60 L 190 180",
    stroke: "url(#g6)",
    strokeWidth: "20",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 70 180 L 70 90 L 120 140 L 170 90 L 170 180",
    stroke: "url(#g6)",
    strokeWidth: "20",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    opacity: "0.35"
  })));
};

// ─── 07. Concentric pulse — one center, expanding rings (broadcast) ─────────
const Icon07 = ({
  size = 240
}) => {
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: 'linear-gradient(135deg, #0E0E10 0%, #2A2A2E 100%)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "92",
    stroke: "#F5D547",
    strokeWidth: "3",
    fill: "none",
    opacity: "0.25"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "68",
    stroke: "#F5D547",
    strokeWidth: "3",
    fill: "none",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "44",
    stroke: "#F5D547",
    strokeWidth: "3",
    fill: "none",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "22",
    fill: "#F5D547"
  }), /*#__PURE__*/React.createElement("text", {
    x: "120",
    y: "130",
    textAnchor: "middle",
    fontFamily: "Archivo, sans-serif",
    fontWeight: "900",
    fontSize: "26",
    fill: "#0E0E10",
    letterSpacing: "-1"
  }, "M")));
};

// ─── 08. Split-screen — half ink / half paper, M straddles ──────────────────
const Icon08 = ({
  size = 240
}) => {
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#F4F1EA'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '50%',
      background: '#0E0E10'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50 70 L 50 175 L 70 175 L 70 110 L 115 175 L 125 175",
    fill: "#F4F1EA"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 115 175 L 125 175 L 170 110 L 170 175 L 190 175 L 190 70 L 170 70 L 120 130 L 70 70 L 50 70",
    fill: "#0E0E10"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "118",
    y: "60",
    width: "4",
    height: "125",
    fill: "#F5D547"
  })));
};

// ─── 09. Plasma magenta — bold tech, M with glow ────────────────────────────
const Icon09 = ({
  size = 240
}) => {
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: 'radial-gradient(ellipse at 30% 30%, #FF3D7F 0%, #B81C5C 50%, #5C0A2E 100%)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 55 60 L 55 180 L 80 180 L 80 105 L 120 145 L 160 105 L 160 180 L 185 180 L 185 60 L 160 60 L 120 100 L 80 60 Z",
    fill: "#FFE8F0"
  })));
};

// ─── 10. Forest green — calm, infrastructure feel ───────────────────────────
const Icon10 = ({
  size = 240
}) => {
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#0F3B2E'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "80",
    x2: "200",
    y2: "80",
    stroke: "#7FD9A8",
    strokeWidth: "2",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "120",
    x2: "200",
    y2: "120",
    stroke: "#7FD9A8",
    strokeWidth: "2",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "160",
    x2: "200",
    y2: "160",
    stroke: "#7FD9A8",
    strokeWidth: "2",
    opacity: "0.4"
  }), [60, 100, 140, 180].map(x => /*#__PURE__*/React.createElement("g", {
    key: x
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: "80",
    r: "8",
    fill: "#7FD9A8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: "120",
    r: "8",
    fill: "#FFD166"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: "160",
    r: "8",
    fill: "#7FD9A8"
  })))));
};

// ─── 11. Terracotta — warm + editorial; big serif M ─────────────────────────
const Icon11 = ({
  size = 240
}) => {
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#E76F51'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '400 240px/1 "Instrument Serif", serif',
      color: '#FAEDCD',
      letterSpacing: '-0.02em',
      transform: 'translateY(-6px)'
    }
  }, "M"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 24,
      top: 22,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#264653'
    }
  }));
};

// ─── 12. Deep indigo — circuit-board lines forming an M ─────────────────────
const Icon12 = ({
  size = 240
}) => {
  return /*#__PURE__*/React.createElement(Bg, {
    style: {
      background: '#1E1B4B'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 240",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid12",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 0 L 0 0 0 20",
    fill: "none",
    stroke: "#312E81",
    strokeWidth: "0.5"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "240",
    height: "240",
    fill: "url(#grid12)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 50 180 L 50 60 L 120 140 L 190 60 L 190 180",
    stroke: "#A5F3FC",
    strokeWidth: "6",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "60",
    r: "8",
    fill: "#FDE047"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "140",
    r: "8",
    fill: "#FDE047"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "190",
    cy: "60",
    r: "8",
    fill: "#FDE047"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "180",
    r: "8",
    fill: "#A5F3FC"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "190",
    cy: "180",
    r: "8",
    fill: "#A5F3FC"
  })));
};
window.MultiNyxIcons = [{
  id: '01',
  name: 'Editorial Spec',
  tagline: 'Deck DNA · cream + ink + yellow',
  Comp: Icon01
}, {
  id: '02',
  name: 'Architect M',
  tagline: 'Mono ink monogram · yellow rule',
  Comp: Icon02
}, {
  id: '03',
  name: 'Fan-out',
  tagline: 'One \u2192 many · parallel concept',
  Comp: Icon03
}, {
  id: '04',
  name: 'Parallel Bars',
  tagline: 'Four runs · one lit',
  Comp: Icon04
}, {
  id: '05',
  name: 'Honeycomb',
  tagline: 'Device fleet · centered',
  Comp: Icon05
}, {
  id: '06',
  name: 'Parallel M',
  tagline: 'Teal/blue · doubled M strokes',
  Comp: Icon06
}, {
  id: '07',
  name: 'Broadcast',
  tagline: 'Pulse rings from one core',
  Comp: Icon07
}, {
  id: '08',
  name: 'Bisect',
  tagline: 'Half ink, half paper · split',
  Comp: Icon08
}, {
  id: '09',
  name: 'Plasma',
  tagline: 'Magenta gradient · bold tech',
  Comp: Icon09
}, {
  id: '10',
  name: 'Field',
  tagline: '3 rails \u00d7 4 nodes · infra',
  Comp: Icon10
}, {
  id: '11',
  name: 'Terracotta Serif',
  tagline: 'Warm editorial · serif M',
  Comp: Icon11
}, {
  id: '12',
  name: 'Circuit',
  tagline: 'Indigo · trace-routed M',
  Comp: Icon12
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "icons/icons.jsx", error: String((e && e.message) || e) }); }

// promotion/canvas.jsx
try { (() => {
// Annotation card for the canvas
function Annotation({
  tag,
  title,
  points
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      padding: '22px 24px',
      background: '#fff',
      border: '1px solid var(--neutral-75)',
      borderRadius: 18,
      font: '400 13px/1.55 var(--font-sans)',
      color: 'var(--neutral-30)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 10.5px/1 var(--font-sans)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--purple-30)',
      marginBottom: 10
    }
  }, tag), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 18px/1.2 var(--font-sans)',
      color: 'var(--neutral-15)',
      marginBottom: 12,
      letterSpacing: '-0.005em'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      marginBottom: 6
    }
  }, p))));
}
const {
  DesignCanvas,
  DCSection,
  DCArtboard,
  IOSDevice
} = window;
function CanvasApp() {
  const phone = (state, dismissedIds = [], showUndoToast = false) => /*#__PURE__*/React.createElement(IOSDevice, {
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(window.HomeScreen, {
    state: state,
    dismissedIds: dismissedIds,
    showUndoToast: showUndoToast
  }));
  return /*#__PURE__*/React.createElement(DesignCanvas, {
    title: "Promotion Component \xB7 Mobile UI",
    subtitle: "Carousel of campaigns inside the home feed \xB7 dismissible \xB7 CTA opens webview"
  }, /*#__PURE__*/React.createElement(DCSection, {
    id: "primary",
    title: "Primary screens"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "default",
    label: "01 \xB7 Home with promo carousel (default state)",
    width: 400,
    height: 900
  }, phone('default')), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "ann-default",
    label: "UX notes \u2014 default",
    width: 380,
    height: 420
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      background: 'var(--neutral-80)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Annotation, {
    tag: "01 \xB7 DEFAULT STATE",
    title: "Quiet card, deliberate accents.",
    points: ['Promo block sits between Latest Activity and Insights — visible without scroll.', 'Carousel: up to 3 active campaigns, swipe-paginated with paging dots.', 'Cards are white. The only color is a 4px left ribbon and an icon chip — the offer type reads at a glance without flooding the screen.', 'One primary CTA per card; dismiss × is neutral and subordinate.', 'No yellow on the home screen by default — it’s reserved for special-use campaign cards (see Card variants).', 'Numbers: $12,345.67 · dates: 12 Feb 2026 · percent: 25.0%.']
  }))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "single",
    label: "02 \xB7 Single active campaign",
    width: 400,
    height: 900
  }, phone('single')), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "webview",
    label: "03 \xB7 CTA \u2192 webview (external offer)",
    width: 400,
    height: 900
  }, /*#__PURE__*/React.createElement(IOSDevice, {
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(window.WebViewScreen, null))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "ann-webview",
    label: "UX notes \u2014 webview",
    width: 380,
    height: 380
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      background: 'var(--neutral-80)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Annotation, {
    tag: "03 \xB7 WEBVIEW HANDOFF",
    title: "In-app webview, not external Safari.",
    points: ['iOS-native webview chrome: Done returns to Home, URL pill is read-only.', 'Brand continuity: Nayax Capital lock-up confirms the user is still in a trusted experience.', 'Sticky primary CTA at the bottom — thumb-zone, single intent.', 'Footer disclosures use the body-5 / 11px scale per type system.']
  })))), /*#__PURE__*/React.createElement(DCSection, {
    id: "states",
    title: "Required screen states"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "loading",
    label: "04 \xB7 Loading (skeleton on promo slot)",
    width: 400,
    height: 900
  }, phone('loading')), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "empty",
    label: "05 \xB7 Empty (no active promos)",
    width: 400,
    height: 900
  }, phone('empty')), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "error",
    label: "06 \xB7 Error (promos failed to load)",
    width: 400,
    height: 900
  }, phone('error')), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "confirm",
    label: "07 \xB7 Dismiss confirmation toast",
    width: 400,
    height: 900
  }, phone('default', ['p1'], true)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "ann-states",
    label: "UX notes \u2014 states",
    width: 380,
    height: 520
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      background: 'var(--neutral-80)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Annotation, {
    tag: "04\u201307 \xB7 STATES",
    title: "Failure never blocks the primary screen.",
    points: ['Loading: shimmer skeleton in the promo slot only — the rest of the home stays interactive.', 'Empty: the promo block is omitted entirely. No “nothing here” placeholder. Insights move up.', 'Error: inline notice + Retry. Doesn’t hide other content. Copy explains what failed and what’s unaffected.', 'Dismiss: card animates out, toast offers Undo for ~5s. Toast sits above the tab bar, in the thumb zone.']
  })))), /*#__PURE__*/React.createElement(DCSection, {
    id: "components",
    title: "Card variants"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "variant-purple",
    label: "Default \xB7 Purple accent (financial)",
    width: 360,
    height: 280
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      background: 'var(--neutral-80)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(window.PromoCard, {
    variant: "purple",
    glyph: "capital",
    eyebrow: "PRE-APPROVED OFFER",
    title: "You\u2019re pre-approved",
    body: "Up to $2,000.00 in interest-free business funding.",
    cta: "View offer",
    meta: "Expires 28 Feb 2026"
  }))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "variant-mint",
    label: "Alt \xB7 Mint accent (advances & lending)",
    width: 360,
    height: 280
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      background: 'var(--neutral-80)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(window.PromoCard, {
    variant: "mint",
    glyph: "advance",
    eyebrow: "CASH ADVANCE",
    title: "Advance on next month\u2019s sales",
    body: "Borrow against projected revenue. Repay automatically.",
    cta: "See terms",
    meta: "Limited time"
  }))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "variant-yellow",
    label: "Special use only \xB7 Yellow accent (campaign moments)",
    width: 360,
    height: 280
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      background: 'var(--neutral-80)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(window.PromoCard, {
    variant: "yellow",
    glyph: "insurance",
    eyebrow: "NEW \xB7 INSURANCE",
    title: "Protect your fleet",
    body: "Equipment cover from $19.00/month per machine.",
    cta: "Get a quote",
    meta: "Save 15% in first year"
  }))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "ann-components",
    label: "UX notes \u2014 variants",
    width: 380,
    height: 420
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      background: 'var(--neutral-80)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Annotation, {
    tag: "COMPONENT",
    title: "One quiet white card. Color is an accent, not a fill.",
    points: ['White card · 1px neutral border · soft shadow. Type stays dark for accessibility & calm.', 'The only colored elements are the 4px left ribbon and the 32px icon chip (pale tint + saturated glyph).', 'Purple is the default for financial / capital offers.', 'Mint is the alt — reserved for advances & lending so the user can distinguish offer types at a glance.', 'Yellow is special-use only — promotional moments (limited drops, "new"). Use sparingly; never two yellow accents on one screen.', 'CTA is always neutral-15 (dark) so it reads as the primary action regardless of accent color.']
  })))));
}
ReactDOM.createRoot(document.getElementById('canvas-root')).render(/*#__PURE__*/React.createElement(CanvasApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotion/canvas.jsx", error: String((e && e.message) || e) }); }

// promotion/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), labels/titles are inline-editable,
// and any artboard can be opened in a fullscreen focus overlay (←/→/Esc).
// State persists to a .design-canvas.state.json sidecar via the host
// bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}', '.dc-card{transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px}', '.dc-grip{cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{cursor:pointer;border-radius:4px;padding:3px 6px;display:flex;align-items:center;transition:background .12s}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-expand{position:absolute;bottom:100%;right:0;margin-bottom:5px;z-index:2;opacity:0;transition:opacity .12s,background .12s;', '  width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center}', '.dc-expand:hover{background:rgba(0,0,0,.06);color:#2a251f}', '[data-dc-slot]:hover .dc-expand{opacity:1}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, focused
// artboard). Order/titles/labels persist to a .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Only direct DCSection > DCArtboard children are
  // walked — wrapping them in other elements opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  React.Children.forEach(children, sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const srcIds = [];
    React.Children.forEach(sec.props.children, ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (!aid) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(children);
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const srcOrder = artboards.map(a => a.props.id ?? a.props.label);
  const sec = ctx && sid && ctx.section(sid) || {};
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px 56px'
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow",
    style: {
      position: 'absolute',
      bottom: '100%',
      left: -4,
      marginBottom: 4,
      color: DC.label
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    onPointerDown: e => e.stopPropagation(),
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    const ns = sectionOrder[(secIdx + d + sectionOrder.length) % sectionOrder.length];
    const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
    if (first) ctx.setFocus(`${ns}/${first}`);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotion/design-canvas.jsx", error: String((e && e.message) || e) }); }

// promotion/home-screen.jsx
try { (() => {
// HomeScreen — accepts a `state` prop:
//   'default' (3 promos), 'single' (1 promo), 'empty' (no promos),
//   'loading' (skeleton), 'error' (failed to load)
// Plus 'dismissedToast' (boolean) to overlay the undo toast.

const SAMPLE_PROMOS = [{
  id: 'p1',
  variant: 'purple',
  glyph: 'capital',
  eyebrow: 'PRE-APPROVED OFFER',
  title: "You're pre-approved",
  body: 'Up to $2,000.00 in interest-free business funding, ready to draw when you need it.',
  cta: 'View offer',
  meta: 'Expires 28 Feb 2026'
}, {
  id: 'p2',
  variant: 'mint',
  glyph: 'advance',
  eyebrow: 'CASH ADVANCE',
  title: "Get an advance on next month\u2019s sales",
  body: 'Borrow against projected revenue. Repay automatically as you earn.',
  cta: 'See terms',
  meta: 'Limited time'
}, {
  id: 'p3',
  variant: 'purple',
  glyph: 'insurance',
  eyebrow: 'NEW \u00b7 INSURANCE',
  title: 'Protect your fleet',
  body: 'Equipment cover starting at $19.00/month per machine. No medical, no fees.',
  cta: 'Get a quote',
  meta: 'Save 15% in first year'
}];
const ACTIVITY = [{
  id: 'a1',
  name: 'Costco',
  date: '12 Feb 2026',
  amount: '-$230.17',
  bal: '$12,345.22',
  icon: '🅒',
  tint: '#FFFEB2'
}, {
  id: 'a2',
  name: 'Transfer to Daniel David',
  date: '12 Feb 2026',
  amount: '-$120.00',
  bal: '$12,345.22',
  icon: '↻',
  tint: '#E2DEFD'
}, {
  id: 'a3',
  name: 'Nayax Weekly Deposit',
  date: '12 Feb 2026',
  amount: '+$3,450.22',
  bal: '$12,345.22',
  icon: 'N',
  tint: '#19151A',
  dark: true,
  positive: true
}];
function NavBar({
  activeTab = 'home',
  state
}) {
  const tab = (id, label, icon) => {
    const active = activeTab === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 0',
        color: active ? 'var(--purple-50)' : 'var(--neutral-50)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22
      }
    }, icon(active ? 'var(--purple-50)' : 'var(--neutral-50)')), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 10px/1 var(--font-sans)'
      }
    }, label));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 34,
      background: '#fff',
      borderTop: '1px solid var(--neutral-75)',
      padding: '6px 16px 8px 16px',
      display: 'flex',
      gap: 4
    }
  }, tab('home', 'Home', window.Icons.home), tab('card', 'Card', window.Icons.cardTab), tab('activity', 'Activity', window.Icons.activity), tab('actions', 'Actions', window.Icons.bolt), tab('account', 'Account', window.Icons.user));
}
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 20px 0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--purple-90)',
      color: 'var(--purple-30)',
      font: '700 14px/1 var(--font-sans)',
      display: 'grid',
      placeItems: 'center'
    }
  }, "AL"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1 var(--font-sans)',
      color: 'var(--neutral-50)'
    }
  }, "HI ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neutral-15)'
    }
  }, "ALEX"))));
}
function NeutralSnackbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 20px 0',
      background: '#fff',
      border: '1px solid var(--neutral-80)',
      borderRadius: 14,
      padding: '10px 14px',
      font: '500 12.5px/1.4 var(--font-sans)',
      color: 'var(--neutral-15)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--purple-50)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, "Just ", /*#__PURE__*/React.createElement("b", null, "3 days"), " until your next deposit from Nayax"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      opacity: 0.6
    }
  }, window.Icons.chevR('var(--neutral-40)')));
}
function BalanceBlock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "overline",
    style: {
      font: '600 10.5px/1 var(--font-sans)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--neutral-50)',
      marginBottom: 6
    }
  }, "BALANCE"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 36px/1 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: 'var(--neutral-15)'
    }
  }, "$12,345", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neutral-50)',
      fontWeight: 600
    }
  }, ".67")));
}
function ActivityList() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1 var(--font-sans)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--neutral-15)'
    }
  }, "LATEST ACTIVITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--font-sans)',
      color: 'var(--purple-30)'
    }
  }, "See all \u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: '4px 14px'
    }
  }, ACTIVITY.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: row.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderBottom: i < ACTIVITY.length - 1 ? '1px solid var(--neutral-80)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: row.tint,
      color: row.dark ? '#FFCD00' : 'var(--neutral-15)',
      display: 'grid',
      placeItems: 'center',
      font: '700 13px/1 var(--font-sans)'
    }
  }, row.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13.5px/1.2 var(--font-sans)',
      color: 'var(--neutral-15)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, row.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.3 var(--font-sans)',
      color: 'var(--neutral-50)',
      marginTop: 3
    }
  }, row.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13.5px/1.2 var(--font-sans)',
      color: row.positive ? '#1EA472' : 'var(--neutral-15)'
    }
  }, row.amount), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.3 var(--font-sans)',
      color: 'var(--neutral-50)',
      marginTop: 3
    }
  }, row.bal))))));
}
function PromoCarousel({
  promos,
  dismissed,
  onDismiss,
  onCTA
}) {
  const [page, setPage] = React.useState(0);
  const trackRef = React.useRef(null);
  const live = promos.filter(p => !dismissed.includes(p.id));

  // Reset page if a promo is removed
  React.useEffect(() => {
    if (page >= live.length && live.length > 0) setPage(live.length - 1);
  }, [live.length, page]);
  if (live.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    style: {
      display: 'flex',
      gap: 14,
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      padding: '0 20px 6px',
      scrollbarWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("style", null, `.no-scroll::-webkit-scrollbar { display: none; }`), live.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      flex: '0 0 calc(100% - 40px)',
      scrollSnapAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(window.PromoCard, {
    variant: p.variant,
    glyph: p.glyph,
    eyebrow: p.eyebrow,
    title: p.title,
    body: p.body,
    cta: p.cta,
    meta: p.meta,
    onDismiss: () => onDismiss(p.id),
    onCTA: () => onCTA(p)
  })))), live.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      marginTop: 14
    }
  }, live.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: i === page ? 18 : 6,
      height: 6,
      borderRadius: 999,
      background: i === page ? 'var(--neutral-15)' : 'var(--neutral-70)',
      transition: 'width 0.2s'
    }
  }))));
}
function PromoSkeleton() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(90deg, #EEECFB 0%, #F6F5FD 50%, #EEECFB 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.4s infinite',
      borderRadius: 22,
      height: 220
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`));
}
function PromoErrorInline({
  onRetry
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF5F1',
      border: '1px solid #FFD7C4',
      borderRadius: 18,
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      color: '#CC2B42',
      flexShrink: 0
    }
  }, window.Icons.alert('#CC2B42')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13.5px/1.3 var(--font-sans)',
      color: 'var(--neutral-15)'
    }
  }, "We couldn't load your offers"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12.5px/1.45 var(--font-sans)',
      color: 'var(--neutral-40)',
      marginTop: 3
    }
  }, "Check your connection. Your other home content is unaffected.")), /*#__PURE__*/React.createElement("button", {
    onClick: onRetry,
    style: {
      background: '#fff',
      border: '1px solid var(--neutral-75)',
      borderRadius: 999,
      padding: '7px 14px',
      font: '600 12px/1 var(--font-sans)',
      color: 'var(--neutral-15)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13
    }
  }, window.Icons.refresh('var(--neutral-15)')), " Retry")));
}
function InsightsBlock() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1 var(--font-sans)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--neutral-15)'
    }
  }, "BUSINESS INSIGHTS")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: '18px',
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: '50%',
      background: 'var(--yellow-30)',
      display: 'grid',
      placeItems: 'center',
      font: '700 9px/1 var(--font-sans)',
      letterSpacing: '0.12em',
      color: 'var(--neutral-15)',
      flexShrink: 0
    }
  }, "PRO TIP"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1.4 var(--font-sans)',
      color: 'var(--neutral-15)'
    }
  }, "Keeping an eye on cash flow is essential for business longevity."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.5 var(--font-sans)',
      color: 'var(--neutral-40)',
      marginTop: 4
    }
  }, "Operators who review their finances monthly have a 25.0% higher chance of identifying potential issues early.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: '16px 16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1 var(--font-sans)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--neutral-15)',
      marginBottom: 12
    }
  }, "BUSINESS BALANCE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'var(--neutral-80)',
      padding: 3,
      borderRadius: 999,
      gap: 2,
      marginBottom: 14
    }
  }, ['1W', '3M', '1Y'].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      padding: '6px 14px',
      borderRadius: 999,
      font: '600 11px/1 var(--font-sans)',
      background: i === 0 ? '#fff' : 'transparent',
      color: i === 0 ? 'var(--neutral-15)' : 'var(--neutral-50)',
      boxShadow: i === 0 ? 'var(--shadow-xs)' : 'none'
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      height: 80,
      padding: '0 4px'
    }
  }, [34, 52, 46, 68, 74, 40, 28].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 18,
      height: `${h}%`,
      background: 'var(--purple-50)',
      borderRadius: 4,
      opacity: i === 4 ? 1 : 0.5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      padding: '0 4px',
      font: '500 9.5px/1 var(--font-sans)',
      color: 'var(--neutral-50)'
    }
  }, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => /*#__PURE__*/React.createElement("div", {
    key: d
  }, d))))));
}
function UndoToast({
  onUndo
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 130,
      background: 'var(--neutral-15)',
      color: '#fff',
      borderRadius: 14,
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      font: '500 13px/1.3 var(--font-sans)'
    }
  }, "Promotion hidden"), /*#__PURE__*/React.createElement("button", {
    onClick: onUndo,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--yellow-30)',
      font: '700 13px/1 var(--font-sans)',
      cursor: 'pointer',
      padding: 0
    }
  }, "Undo"));
}
function HomeScreen({
  state = 'default',
  dismissedIds = [],
  showUndoToast = false
}) {
  const [dismissed, setDismissed] = React.useState(dismissedIds);
  const promos = state === 'single' ? SAMPLE_PROMOS.slice(0, 1) : state === 'empty' ? [] : SAMPLE_PROMOS;
  let promoSlot;
  if (state === 'loading') promoSlot = /*#__PURE__*/React.createElement(PromoSkeleton, null);else if (state === 'error') promoSlot = /*#__PURE__*/React.createElement(PromoErrorInline, {
    onRetry: () => {}
  });else if (promos.length > 0) promoSlot = /*#__PURE__*/React.createElement(PromoCarousel, {
    promos: promos,
    dismissed: dismissed,
    onDismiss: id => setDismissed([...dismissed, id]),
    onCTA: () => {}
  });else promoSlot = null; // empty

  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--neutral-80)',
      overflowY: 'auto',
      paddingBottom: 130
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(NeutralSnackbar, null), /*#__PURE__*/React.createElement(BalanceBlock, null), /*#__PURE__*/React.createElement(ActivityList, null), promoSlot, /*#__PURE__*/React.createElement(InsightsBlock, null), showUndoToast && /*#__PURE__*/React.createElement(UndoToast, {
    onUndo: () => {}
  }), /*#__PURE__*/React.createElement(NavBar, {
    activeTab: "home"
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotion/home-screen.jsx", error: String((e && e.message) || e) }); }

// promotion/icons.jsx
try { (() => {
// Shared mini-icons (24×24 line) — match Nayax 24px line-icon style
window.Icons = {
  card: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "13",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5h18M7 15h3"
  })),
  swap: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 8h13l-3-3M19 16H6l3 3"
  })),
  bank: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 10 12 4l9 6M5 10v8M19 10v8M9 10v8M15 10v8M3 20h18"
  })),
  spark: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
  })),
  close: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })),
  chevR: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })),
  chevL: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 6l-6 6 6 6"
  })),
  home: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"
  })),
  cardTab: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "13",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5h18"
  })),
  activity: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12h4l3-7 4 14 3-7h4"
  })),
  bolt: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 3 4 14h7l-1 7 9-11h-7z"
  })),
  user: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  refresh: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 1 15.5-6.3M21 4v5h-5M21 12a9 9 0 0 1-15.5 6.3M3 20v-5h5"
  })),
  alert: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 2 20h20zM12 10v5M12 17.5v.5"
  }))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotion/icons.jsx", error: String((e && e.message) || e) }); }

// promotion/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotion/ios-frame.jsx", error: String((e && e.message) || e) }); }

// promotion/promo-card.jsx
try { (() => {
// PromoCard — QUIET WHITE base with a small accent
// Accents are confined to: left ribbon + icon chip + small CTA pill
// Variants: 'purple' (default), 'mint' (alt for advances), 'yellow' (special use only)

const PROMO_ACCENTS = {
  purple: {
    accent: 'var(--purple-50)',
    accentSub: 'var(--purple-90)',
    // pale chip bg
    chipFg: 'var(--purple-30)',
    btnBg: 'var(--neutral-15)',
    btnFg: '#FFFFFF',
    label: 'Default \u00b7 financial offers'
  },
  mint: {
    accent: '#1E8765',
    accentSub: '#E5F5EE',
    chipFg: '#0F6249',
    btnBg: 'var(--neutral-15)',
    btnFg: '#FFFFFF',
    label: 'Alt \u00b7 advances & lending'
  },
  yellow: {
    accent: 'var(--yellow-30)',
    accentSub: '#FFFBE0',
    chipFg: 'var(--neutral-15)',
    btnBg: 'var(--neutral-15)',
    btnFg: '#FFFFFF',
    label: 'Special use only \u00b7 campaign moments'
  }
};

// Tiny glyph for the icon chip — different per offer type
const ACCENT_GLYPHS = {
  capital: c => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 14h16M6 14v4h12v-4M8 14V8a4 4 0 0 1 8 0v6"
  })),
  advance: c => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v18M5 10l7-7 7 7"
  })),
  insurance: c => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z"
  }))
};
function PromoCard({
  variant = 'purple',
  glyph = 'capital',
  eyebrow = 'PRE-APPROVED OFFER',
  title,
  body,
  cta = 'View offer',
  meta = 'Expires 28 Feb 2026',
  onDismiss = () => {},
  onCTA = () => {}
}) {
  const a = PROMO_ACCENTS[variant];
  const g = ACCENT_GLYPHS[glyph] || ACCENT_GLYPHS.capital;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#FFFFFF',
      color: 'var(--neutral-15)',
      borderRadius: 18,
      padding: '20px 22px 18px 26px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(25,21,26,0.04), 0 1px 2px rgba(25,21,26,0.06)',
      border: '1px solid var(--neutral-80)',
      minHeight: 196,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 18,
      bottom: 18,
      width: 4,
      borderRadius: 2,
      background: a.accent
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss promotion",
    style: {
      position: 'absolute',
      right: 14,
      top: 14,
      width: 26,
      height: 26,
      borderRadius: '50%',
      border: 'none',
      background: 'transparent',
      color: 'var(--neutral-50)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 13,
      height: 13
    }
  }, window.Icons.close('var(--neutral-50)'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12,
      paddingRight: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: a.accentSub,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 18
    }
  }, g(a.chipFg))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10.5px/1 var(--font-sans)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--neutral-50)'
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 19px/1.22 var(--font-sans)',
      letterSpacing: '-0.005em',
      color: 'var(--neutral-15)',
      marginBottom: 6,
      paddingRight: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--neutral-40)',
      marginBottom: 18,
      paddingRight: 8
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.3 var(--font-sans)',
      color: 'var(--neutral-50)'
    }
  }, meta), /*#__PURE__*/React.createElement("button", {
    onClick: onCTA,
    style: {
      background: a.btnBg,
      color: a.btnFg,
      border: 'none',
      borderRadius: 999,
      padding: '11px 20px',
      font: '600 13.5px/1 var(--font-sans)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer'
    }
  }, cta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13,
      display: 'inline-grid',
      placeItems: 'center'
    }
  }, window.Icons.chevR(a.btnFg)))));
}
window.PromoCard = PromoCard;
window.PROMO_ACCENTS = PROMO_ACCENTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotion/promo-card.jsx", error: String((e && e.message) || e) }); }

// promotion/webview-screen.jsx
try { (() => {
// WebView screen — what user sees after tapping CTA
// Shows iOS-style webview chrome (top bar with Done/Reload, URL pill, share)

function WebViewScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F2F2F7',
      borderBottom: '1px solid #D1D1D6',
      padding: '56px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      color: '#0A84FF',
      font: '500 15px/1 var(--font-sans)',
      cursor: 'pointer'
    }
  }, "Done"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-sans)',
      color: 'var(--neutral-15)',
      textAlign: 'center'
    }
  }, "nayax.capital"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      color: '#0A84FF'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v12M7 8l5-5 5 5M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 10,
      padding: '7px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '500 12.5px/1 var(--font-sans)',
      color: 'var(--neutral-50)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "10",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  })), "nayax.capital/offers/preapproved-2k")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '24px 22px 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: 'var(--neutral-15)',
      color: 'var(--yellow-30)',
      font: '900 14px/1 var(--font-sans)',
      display: 'grid',
      placeItems: 'center'
    }
  }, "N"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13px/1 var(--font-sans)',
      color: 'var(--neutral-15)',
      letterSpacing: '0.04em'
    }
  }, "NAYAX CAPITAL")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--purple-90)',
      borderRadius: 18,
      padding: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10.5px/1 var(--font-sans)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--purple-30)',
      marginBottom: 8
    }
  }, "OFFER ID \xB7 NX-2026-0042"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px/1.18 var(--font-sans)',
      color: 'var(--neutral-15)',
      letterSpacing: '-0.01em',
      marginBottom: 6
    }
  }, "$2,000.00 in interest-free funding"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13.5px/1.5 var(--font-sans)',
      color: 'var(--neutral-40)'
    }
  }, "Ready to draw whenever you need it. No fees, no monthly payments \u2014 repay automatically as you earn.")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13px/1 var(--font-sans)',
      color: 'var(--neutral-15)',
      marginBottom: 10,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "HOW IT WORKS"), [['Apply in 2 minutes', 'No paperwork, no credit check.'], ['Get a decision today', 'Funds in your Nayax balance within 24 hours.'], ['Repay as you earn', 'A small portion of each sale is collected automatically.']].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      padding: '12px 0',
      borderBottom: i < 2 ? '1px solid var(--neutral-80)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--neutral-15)',
      color: '#fff',
      font: '700 12px/1 var(--font-sans)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 var(--font-sans)',
      color: 'var(--neutral-15)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12.5px/1.45 var(--font-sans)',
      color: 'var(--neutral-40)',
      marginTop: 2
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      background: 'var(--neutral-15)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '15px 22px',
      font: '700 15px/1 var(--font-sans)',
      cursor: 'pointer'
    }
  }, "Apply now"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px/1.5 var(--font-sans)',
      color: 'var(--neutral-50)',
      textAlign: 'center',
      marginTop: 10
    }
  }, "Subject to eligibility. Offer expires 28 Feb 2026."))));
}
window.WebViewScreen = WebViewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotion/webview-screen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Add = __ds_scope.Add;

__ds_ns.Arrow = __ds_scope.Arrow;

__ds_ns.ArrowRight = __ds_scope.ArrowRight;

__ds_ns.ArrowRight2 = __ds_scope.ArrowRight2;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ChevronDown = __ds_scope.ChevronDown;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Download16 = __ds_scope.Download16;

__ds_ns.Download24 = __ds_scope.Download24;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Help24 = __ds_scope.Help24;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Loading = __ds_scope.Loading;

__ds_ns.Loading2 = __ds_scope.Loading2;

__ds_ns.Location = __ds_scope.Location;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Overlay = __ds_scope.Overlay;

__ds_ns.Phone = __ds_scope.Phone;

__ds_ns.SecondaryButton = __ds_scope.SecondaryButton;

__ds_ns.TextInput = __ds_scope.TextInput;

})();
