        function abrirMenuLateral() {
            const menu = document.getElementById('menuLateral');
            // Si ya está abierto, ciérralo; si está cerrado, ábrelo
            if (menu.style.width === '200px') {
                menu.style.width = '0';
            } else {
                menu.style.width = '200px';
            }
        }
        function cerrarMenuLateral() {
            document.getElementById('menuLateral').style.width = '0';
        }