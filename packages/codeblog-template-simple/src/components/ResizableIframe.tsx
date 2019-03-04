import React from "react";
import { iframeResizer as iframeResizerLib } from "iframe-resizer";

export default class ResizableIframe extends React.PureComponent {
  static defaultProps = {
    frameBorder: 0
  };

  shouldComponentUpdate() {
    return false;
  }

  setFrame = frame => {
    this.frame = frame;

    if (this.frame) {
      this.resizeIframe();
    }
  };

  componentWillUnmount() {
    if (this.frame) {
      const iframeResizer = this.frame.iFrameResizer;
      iframeResizer && iframeResizer.removeListeners();
    }
  }

  resizeIframe = () => {
    if (!this.frame) {
      return;
    }

    iframeResizerLib(
      {
        checkOrigin: false
      },
      this.frame
    );
  };

  render() {
    const { src, id, onLoad, frameBorder, className, style } = this.props;
    return (
      <iframe
        ref={this.setFrame}
        src={src}
        id={id}
        frameBorder={frameBorder}
        className={className}
        style={style}
        onLoad={onLoad}
      />
    );
  }
}
