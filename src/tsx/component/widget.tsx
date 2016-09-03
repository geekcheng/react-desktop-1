/// <reference path="../../../typings/tsd.d.ts" />
import * as React from "react";
require('../../css/widget.css');
export class Widget extends React.Component<{
    content?: JSX.Element,
    icon: string
    url?: string
    title: string,
    maximum?: boolean,
    covered?: boolean,
    zIndex?: number,
    show?: boolean,
    minimum?: boolean
    onSelected: (widget: Widget) => void,
    onClosd: (widget: Widget) => void,
    top?: number
    left?: number
}, {
        top?: number,
        left?: number,
        maxing?: boolean,
        hidden?: boolean
    }> {
    refs: {
        [key: string]: (Element);
        layer: HTMLDivElement
    }
    private innerOperation: boolean = false
    constructor() {
        super();
        this.state = {
            hidden: false
        };
    }
    private handleResizs() {
        let self = this;
        this.setState({
            maxing: !self.state.maxing,
            hidden: false
        });
    }
    private handleMin(e: MouseEvent) {
        let self = this;
        self.innerOperation = true;
        self.setState({
            hidden: true
        });
    }
    private handleClose() {
        let self = this;
        self.props.onClosd(self);
    }
    private handldeMouseMove(e: MouseEvent) {
        let self = this;
        if (self.moving) {
            let x = e.pageX - self.x;
            let y = e.pageY - self.y;
            let layer = ReactDOM.findDOMNode(self.refs.layer);
            let maxX = document.body.clientWidth - layer.clientWidth;
            let maxY = document.body.clientHeight - layer.clientHeight;
            x < 0 && (x = 0);
            y < 0 && (y = 0);
            x > maxX && (x = maxX);
            y > maxY && (y = maxY);
            this.setState({
                top: y,
                left: x
            });
        }
    }
    private handldeMouseDown(e: MouseEvent) {
        let self = this;
        self.props.onSelected(self);
        self.moving = true;
        self.x = e.pageX - self.state.left;
        self.y = e.pageY - self.state.top;
        let old = document.onmousemove;
        document.onmousemove = (ev) => self.handldeMouseMove.bind(self)(ev);
        document.onmouseup = (ev) => {
            self.moving = false;
            document.onmousemove = old;
        };
    }
    componentDidMount() {
        let self = this;
        let layer = ReactDOM.findDOMNode(self.refs.layer);
        let maxX = document.body.clientWidth - layer.clientWidth;
        let maxY = document.body.clientHeight - layer.clientHeight;
        if (self.state.left < 0) self.state.left = 0;
        if (self.state.left > maxX) self.state.left = maxX;
        if (self.state.top < 0) self.state.top = 0;
        if (self.state.top > maxY) self.state.top = maxY;
        this.setState({
            top: self.state.top,
            left: self.state.left
        });
    }
    private moving = false
    private x: number
    private y: number
    render() {
        let self = this;
        if (self.state.top == undefined) self.state.top = self.props.top == undefined ? 50 : self.props.top;
        if (self.state.left == undefined) self.state.left = self.props.left == undefined ? 50 : self.props.left;
        let indexStyle: any = {};
        if (!self.innerOperation && self.state.hidden && self.props.show === true) self.state.hidden = false;
        if (self.innerOperation) self.innerOperation = undefined;
        indexStyle.visibility = self.state.hidden ? 'hidden' : 'visible';
        if (self.props.zIndex) {
            indexStyle.zIndex = self.props.zIndex;
        }
        return <div className={"widget-layer " + (self.props.url ? 'widget-full' : (self.state.maxing ? 'widget-full' : '')) }
            style={indexStyle} onClick={e => self.props.onSelected(self) }>
            {
                self.props.covered ? <div className="widget-shade"></div> : null
            }
            <div className="widget-box show" ref="layer" style={{
                left: self.state.left,
                top: self.state.top
            }}>
                <div className="widget-title widget-move" onMouseDown={e => self.handldeMouseDown.bind(self)(e) }>
                    <img src={self.props.icon || require("../../imgs/default-app-icon.png") } alt={self.props.title}   />
                    <span>{self.props.title}</span>
                </div>
                {
                    self.props.minimum == false ? null : <div className="widget-min widget-ico" onClick={e => self.handleMin.bind(self)(e) }></div>
                }
                <div className="widget-close widget-ico" onClick={e => self.handleClose.bind(self)() }></div>
                {
                    self.props.url ? null : (self.props.maximum ? <div className="widget-resize widget-ico" onClick={e => self.handleResizs.bind(self)() }></div> : null)
                }
                {
                    self.props.content ? <div className="widget-con">
                        {self.props.content}
                    </div> : (self.props.url ? <iframe src={self.props.url} style={{
                        width: '100%',
                        height: '100%'
                    }}></iframe> : null)
                }
            </div>
        </div>;
    }
}