/*
  Copyright 2013 Weswit Srl

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

define(["LightstreamerClient","StatusWidget"],function(LightstreamerClient,StatusWidget) {
  var protocolToUse = document.location.protocol != "file:" ? document.location.protocol : "http:";
  var lsClient = new LightstreamerClient(protocolToUse+"//localhost:8080","DEMOMOVE3D");
  
  //This setting concerns the CPU usage optimization for cases where IE browsers without WebScokets support are in use.
  //Please note that the used method of the client library is undocumented since it should be considered private.
  lsClient.connectionOptions.setXDomainStreamingEnabled(false);
   
  lsClient.addListener(new StatusWidget("left", "0px", true));

  lsClient.connect();
  
  return lsClient;
});

