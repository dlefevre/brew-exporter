"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[53],{94242:(C,d,i)=>{i.r(d),i.d(d,{plugin:()=>D});var p=i(27222),u=i(94069),l=i(32122),h=i(81225),r=i(76687),m=i(28894),c=i(78200),n=i(10658);class f extends r.Component{constructor(e){super(e),this.initElement=t=>(this.element=new c.f(l.e,t.options.root),this.updateSize(t),this.element.updateData(this.dims),this.element),this.updateSize=t=>{const{width:o,height:a}=t;this.element.options.constraint={vertical:m.fJ.Top,horizontal:m._5.Left},this.element.options.placement={left:0,top:0,width:o,height:a}},this.dims={getColor:t=>(0,n.getColorDimensionFromData)(this.props.data,t),getScale:t=>(0,n.getScaleDimensionFromData)(this.props.data,t),getScalar:t=>(0,n.getScalarDimensionFromData)(this.props.data,t),getText:t=>(0,n.getTextDimensionFromData)(this.props.data,t),getResource:t=>(0,n.getResourceDimensionFromData)(this.props.data,t),getPanelData:()=>this.props.data},this.element=this.initElement(e)}shouldComponentUpdate(e){const{width:t,height:o,data:a}=this.props;let s=!1;return(t!==e.width||o!==e.height)&&(this.updateSize(e),s=!0),a!==e.data&&(this.element.updateData(this.dims),s=!0),this.props.options?.root!==e.options?.root&&(this.initElement(e),s=!0),s}render(){const{width:e,height:t}=this.props;return r.createElement("div",{style:{width:e,height:t,overflow:"hidden",position:"relative"}},this.element.render())}}const v={root:{config:{path:{mode:n.ResourceDimensionMode.Fixed,fixed:"img/icons/unicons/analysis.svg"},fill:{fixed:"green"}}}},D=new p.c(f).setNoPadding().useFieldConfig({standardOptions:{[u.qb.Mappings]:{settings:{icon:!0}}}}).setPanelOptions(g=>{g.addNestedOptions({category:["Icon"],path:"root",build:(e,t)=>{l.e.registerOptionsUI(e,t),h.I.addBackground(e,t),h.I.addBorder(e,t)},defaultValue:v.root})})}}]);

//# sourceMappingURL=iconPanel.f824093aa8229f35706b.js.map