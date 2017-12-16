window.billPayComponent = Vue.extend({
	components: {
		'menu-component': billPayMenuComponent
	},
	template: `
		<style type="text/css">
			.green { color: green; }
			.gray { color: gray; }
			.red { color: red; }
		</style>

		<h1>{{ title }}</h1>
		<h3 :class="{'gray':status === false, 'green':status === 0, 'red':status > 0}">{{ status | statusGeneral }}</h3>
		
		<menu-component></menu-component>
		<router-view></router-view>
	`,
	data: function(){
		return {
			title: "Contas a Pagar"
		};
	},
	computed: {
		status: function(){

			var bills = this.$root.$children[0].bills;

			if(!bills.length){
				return false;
			}

			var count = 0;
			for(var i in bills){
				if(!bills[i].done){
					count++;
				}
			}
			return count;
		}
	}
});