var links = {};
links["07/12/2023"] = "https://ajunta.ew.dev.br/#play/W3sibmFtZSI6IlRlbSBubyBjZWx1bGFyIiwid29yZHMiOlsiQ0FMRU5EwVJJTyIsIkFHRU5EQSIsIkPCTUVSQVMiLCJNSUNST0ZPTkUiXX0seyJuYW1lIjoiQWNlc3PzcmlvcyBkZSBhcm1hemVuYW1lbnRvIiwid29yZHMiOlsiQk9MU0FTIiwiUE9DSEVURVMiLCJNT0NISUxBUyIsIkVTVE9KT1MiXX0seyJuYW1lIjoiVXNhZG9zIHBhcmEgaWRlbnRpZmljYefjbyIsIndvcmRzIjpbIkRJR0lUQUlTIiwiRkFDRSIsIlNFTkhBUyIsIkFTU0lOQVRVUkFTIl19LHsibmFtZSI6IlBvcnRhLV9fXyIsIndvcmRzIjpbIlJFVFJBVE8iLCJDT1BPUyIsIk1BTEFTIiwiVk9aIl19XQ%3D%3D"
links["06/12/2023"] = "https://ajunta.ew.dev.br/#play/W3sibmFtZSI6IlNpbvRuaW1vcyBkZSBjb21lciIsIndvcmRzIjpbIkFMSU1FTlRBIiwiREVHVVNUQSIsIkRFVk9SQSIsIklOR0VSRSJdfSx7Im5hbWUiOiJWZe1jdWxvcyBhcXXhdGljb3MiLCJ3b3JkcyI6WyJMQU5DSEEiLCJTVUJNQVJJTk8iLCJCQUxTQSIsIlZFTEVJUk8iXX0seyJuYW1lIjoiVGltZXMgZGUgZnV0ZWJvbCIsIndvcmRzIjpbIkNSVVpFSVJPIiwiQVRMyVRJQ08iLCJTQU5UT1MiLCJJTlRFUk5BQ0lPTkFMIl19LHsibmFtZSI6IlZpYWdlbSBkZSBhdmnjbyIsIndvcmRzIjpbIkRJUkVUTyIsIkRPTclTVElDTyIsIkVTQ0FMQSIsIkNPTkVYw08iXX1d"
links["05/12/2023"] = "https://ajunta.ew.dev.br/#play/W3sibmFtZSI6IkFzdHJvbm9taWEiLCJ3b3JkcyI6WyJFU1RSRUxBIiwi01JCSVRBIiwiQ0lOVFVSw08iLCJTQVTJTElURSJdfSx7Im5hbWUiOiJDb250aW5lbnRlcyIsIndvcmRzIjpbIsFGUklDQSIsIsFTSUEiLCJFVVJPUEEiLCJPQ0VBTklBIl19LHsibmFtZSI6IkV2ZW50b3MgZGEgdmlkYSIsIndvcmRzIjpbIkZPUk1BVFVSQSIsIkNBU0FNRU5UTyIsIkFQT1NFTlRBRE9SSUEiLCJNT1JURSJdfSx7Im5hbWUiOiJDYXBpdONvIF9fXyIsIndvcmRzIjpbIkdBTkNITyIsIlBMQU5FVEEiLCJBTclSSUNBIiwiTkFTQ0lNRU5UTyJdfV0%3D"

function getLink(date){
    window.open(links[date]);
}

function getRandomLink() {
    const keys = Object.keys(links);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    window.open(links[randomKey]);
  }