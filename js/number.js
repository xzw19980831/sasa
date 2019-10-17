 function number(){
                    var Input0=document.getElementById('input0');
                    var Input1=document.getElementById('input1');
                    var Input2=document.getElementById('input2');
                    
                        Input1.οnclick=function(){
                            this.form.amount.value++;
                        }
                        
                            Input2.οnclick=function(){
                                if(Input0.value>1){
                                this.form.amount.value--;
                            }
                        }
                    }
             
    //                 <form>
    //                 <input class="inputclass" id="input2" type=button value="-">
    //                 <input class="inputclass" id="input0" type=text name=amount value="1">
    //                 <input class="inputclass" id="input1" type=button value="+">
    //                 </form>
