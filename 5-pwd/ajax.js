"use strict";
 function getXHR() 
            {var xhr = new XMLHttpRequest();
                
                
                try
                {
                    xhr =new XMLHttpRequest();
                }
                    catch(error)
                    {
                        try
                        {
                            xhr = ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch(error)
                        {
                            throw new Error("No XHR Object Available");
                        }
                    }
                
                return xhr;
            }
       
        function AjaxCon(url,callback)
        {
          var xhr = getXHR.xhr;
            var READY_STATE_UNINITIALIZED = 0;
            var READY_STATE_OPENED = 1;
            var READY_STATE_SENT = 2;
            var READY_STATE_LOADING = 3;
            var READY_STATE_COMPLETE = 4;
            
            xhr = getXHR();
            
            xhr.onreadystatechange = function()
            {
                if(xhr.readyState === READY_STATE_COMPLETE)
                {
                    if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)
                    {
                        callback(xhr.responseText);
                    }
                    else
                    {
                        console.log("läsfel,status:"+ xhr.status);
                    }
                }
            }
            xhr.open("get",url, true);
                
            xhr.send(null);
        
           
        
        
        
        
        }
        
        
        
  