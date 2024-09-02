var TeamsUtil = Class.create();
TeamsUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	sendAttachments: function () {
		var attachmentArray = this.getParameter('attachArray');
		var array = attachmentArray.toString().split(',');
		try {
			var inputs = {};
			inputs['comments'] = ''+this.getParameter('comments'); // String 
			inputs['table_name'] = 'sn_customerservice_case'; // String 
			inputs['record_number'] = ''+this.getParameter('num'); // String 
			inputs['attachment_array'] = array; // Array.String 
			var result = sn_fd.FlowAPI.getRunner().subflow('global.send_attachments_to_teams').inForeground().withInputs(inputs).run();
			var outputs = result.getOutputs();

			// Current subflow has no outputs defined.		
		} catch (ex) {
			var message = ex.getMessage();

			gs.error(message);
		}

		return " " + attachmentArray;

	},

	type: 'TeamsUtil'
});
