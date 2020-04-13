Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _base=require('./_base.mask');var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
var ZIP_CODE_MASK='99999-999';var

ZipCodeMask=function(_BaseMask){_inherits(ZipCodeMask,_BaseMask);function ZipCodeMask(){_classCallCheck(this,ZipCodeMask);return _possibleConstructorReturn(this,(ZipCodeMask.__proto__||Object.getPrototypeOf(ZipCodeMask)).apply(this,arguments));}_createClass(ZipCodeMask,[{key:'getValue',value:function getValue(




value,settings){
return this.getVMasker().toPattern(value,ZIP_CODE_MASK);
}},{key:'getRawValue',value:function getRawValue(

maskedValue,settings){
return _get(ZipCodeMask.prototype.__proto__||Object.getPrototypeOf(ZipCodeMask.prototype),'removeNotNumbers',this).call(this,maskedValue);
}},{key:'validate',value:function validate(

value,settings){
if(!!value){
return value.length===ZIP_CODE_MASK.length;
}

return true;
}}],[{key:'getType',value:function getType(){return'zip-code';}}]);return ZipCodeMask;}(_base2.default);exports.default=ZipCodeMask;