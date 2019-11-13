var cpanelApp = angular.module('cpanel', []);

cpanelApp.controller('user', function($scope)
{
    var users = this;
    users.list = [ 
        // LOTE DE PRUEBAS
        // {name: 'Santiago', lastName: 'Gimenez', id: '1'},
        // {name: 'Camila', lastName: 'Di Virgilio', id: '2'},
        // {name: 'Gabriela', lastName: 'Osorio', id: '3'}
    ];
    users.add = function()
    {
        console.log('users.add()');
        let name = users.name;
        let lastName = users.lastName;
        let id = users.id;
        // if( name != '' && lastName != '' && id != '' )
            users.list.push({name: name, lastName: lastName, id: id});
        name = '';lastName = '';id = '';
    }
});