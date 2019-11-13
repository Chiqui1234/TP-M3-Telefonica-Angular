var mainApp = angular.module('main', []);
mainApp.controller('login', function($scope)
{
    // Acá dentro, llamar a $scope o 'this' es lo mismo
    var user = this;
    user.checkLogin = function()
    {
        console.log('checkLogin');
        // this.email();
        // this.password();
    }
    user.email = function()
    {
        console.log('email');
        let email = user.email;
        let dots = 0, arroba = 0;
        for(let i = 0;i < email.lenght();i++)
        {
            // Visto que los protocolos email admiten TANTOS caracteres ASCII, nos pareció OK hacer sólo comprobaciones por puntos y arrobas. El email admite, incluso, espacios en blancos si se usan comillas.
            // Ej: John Doe@gmail.com no es válido, pero "John Doe"@gmail.com sí lo es
            // Fuente: https://stackoverflow.com/questions/2049502/what-characters-are-allowed-in-an-email-address
            if(email.charAt(i) == '.')
                dots++;
            if(email.charAt(i) == '@')
                arroba++;
        }
        return dots<3&&arroba==1?true:false;
    }
    user.password = function()
    {
        let password = user.password;
        return password.lenght()>=8?true:false;
    }
});