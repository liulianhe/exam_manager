import React,{Component} from 'react'

function EditMpdel(Com:any) {
    return class EditMpdelDemo extends Component<any> {
        constructor(props:any) {
            super(props);
            // this.op={};
            this.state={};
        }
        handleChange = (e:any) => {
            const { name, value } = e.target;
            this.setState(
              {
                [name]: value
              }
            )
        }
        getFieldDecorator =(filed:any,op: any,Comp: React.DetailedReactHTMLElement<{
                name: any; //控件name
                value: any; //控件值
                onChange: (e: any) => void;
            }, HTMLElement>)=>{
			// this.op[filed]=op;
			//因为这里要更改已经生成的组件，直接修改是无法修改的，不过我通过react.cloneElement
			return <div>
					{React.cloneElement(Comp, {
		            name: filed, //控件name
		            value: (this.state as any)[filed] || "", //控件值
		            onChange: this.handleChange, //change事件处理
		    
		          })}
			</div>
		
	}
        render() {
            return <Com {...this.props} value = {this.state}/>
        }
        // render(){

        //     return <Com {...this.props} value = {this.state} getFieldDecorator={this.getFieldDecorator } ><Com>
        // }
    }
    
}

export default EditMpdel
