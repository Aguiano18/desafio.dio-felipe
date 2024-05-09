class Item {
    constructor(id = null, quantidade = 0) {
        this.id = id;
        this.quantidade = quantidade;
    }

    atualizarQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
}

class Inventario {
    constructor() {
        this.slots = new Array(30).fill(null)
    }

    itemJaExiste(dropID) {
        var indice = this.slots.some(item => item !== null && item.id === dropID)
        return {
            existe: indice !== -1,
            indice: indice
        }
    }

    adicionarItem(drop) {
        var indice = this.slots.findIndex(slot => slot === null);
        if (indice !== -1) {
            this.slots[indice] = drop;
        }
    }
}

var inventario = new Inventario();

inventario.slots[2] = new Item(45,4);

(function() {
   
    // Função para adicionar um item ao inventário
    Game_Party.prototype.gainItem = function(drop, amount, includeEquip) {
        // Adiciona o item ao inventário
        this._items[drop.id] = (this._items[drop.id] || 0) + amount;

        // Exibe as informações do inventário em uma janela de mensagem
        var message = "Você pegou " + amount + "x " + drop.name + ".\n";
        message += "Item ID: " + drop.id + ", Quantidade: " + this._items[drop.id];
        $gameMessage.add(message);
        var recurso = inventario.itemJaExiste(drop.id);
        if (recurso.existe) {
            inventario.slots[recurso.indice].atualizarQuantidade(this._items[drop.id]);
        }
        if (!recurso.existe) {
            var item = new Item(drop.id, this._items[drop.id]);
            inventario.adicionarItem(item);
        }
        $gameMessage.add(inventario.slots);
        $gameMap.requestRefresh();
    };

})();