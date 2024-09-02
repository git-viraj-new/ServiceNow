(function execute(inputs, outputs) {


    var gr = new GlideRecord(inputs.table_name);
    gr.addQuery('number',inputs.record_number);
    gr.query();
    if (gr.next()) {

        var rm = new sn_ws.RESTMessageV2();
        rm.setHttpMethod('GET');

        var url = 'https://instance.service-now.com/' + inputs.table_name + '.do?PDF&sys_id=' + gr.sys_id;
        rm.setEndpoint(url);

        rm.setBasicAuth('***', '****');
        rm.saveResponseBodyAsAttachment(inputs.table_name, gr.sys_id, gr.number+".pdf");


        var response = rm.execute();
        if (response.getStatusCode() == 200) {
            outputs.status = "Success";
        }else{
            outputs.status = "Failed";
        }

    }else{
        outputs.status = "Not Found";
    }


})(inputs, outputs);
