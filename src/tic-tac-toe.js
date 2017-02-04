class TicTacToe {
    constructor() {
        this.playerOne = 0;
        this.playerTwo = 0;
        this.data = [['','',''],
                     ['','',''],
                     ['','','']];
    }

    getCurrentPlayerSymbol() {
        if(this.playerOne === this.playerTwo) {
            return 'x';
        } else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.playerOne === this.playerTwo) {
            if(this.data[rowIndex][columnIndex] == '') {
                this.data[rowIndex][columnIndex] = 'x';
                this.playerOne++;
            } else {
                return null;
            }
        } else if(this.playerOne > this.playerTwo){
            if(this.data[rowIndex][columnIndex] == '') {
                this.data[rowIndex][columnIndex] = 'o';
                this.playerTwo++;
            } else {
                return null;
            }
        }
    }

    isFinished() {
        var symbol = ['x', 'o'];
        for(var i = 0; i <= symbol.length; i++) {
            if( (this.data[0][0] === symbol[i] && this.data[0][1] == symbol[i] && this.data[0][2] === symbol[i]) ||
                (this.data[1][0] === symbol[i] && this.data[1][1] === symbol[i] && this.data[1][2] === symbol[i]) ||
                (this.data[2][0] === symbol[i] && this.data[2][1] === symbol[i] && this.data[2][2] === symbol[i]) ||
                (this.data[0][0] === symbol[i] && this.data[1][0] === symbol[i] && this.data[2][0] === symbol[i]) ||
                (this.data[0][1] === symbol[i] && this.data[1][1] === symbol[i] && this.data[2][1] === symbol[i]) ||
                (this.data[0][2] === symbol[i] && this.data[1][2] === symbol[i] && this.data[2][2] === symbol[i]) ||
                (this.data[0][0] === symbol[i] && this.data[1][1] === symbol[i] && this.data[2][2] === symbol[i]) ||
                (this.data[0][2] === symbol[i] && this.data[1][1] === symbol[i] && this.data[2][0] === symbol[i]) ||
            this.isDraw()) {
                return true;
            }
        }
        return false;
    }

    getWinner() {
        var symbol = ['x', 'o'];
        for(var i = 0; i <= symbol.length; i++) {
            if(((this.data[0][0] === symbol[i] && this.data[0][1] == symbol[i] && this.data[0][2] === symbol[i]) ||
                (this.data[1][0] === symbol[i] && this.data[1][1] === symbol[i] && this.data[1][2] === symbol[i]) ||
                (this.data[2][0] === symbol[i] && this.data[2][1] === symbol[i] && this.data[2][2] === symbol[i]) ||
                (this.data[0][0] === symbol[i] && this.data[1][0] === symbol[i] && this.data[2][0] === symbol[i]) ||
                (this.data[0][1] === symbol[i] && this.data[1][1] === symbol[i] && this.data[2][1] === symbol[i]) ||
                (this.data[0][2] === symbol[i] && this.data[1][2] === symbol[i] && this.data[2][2] === symbol[i]) ||
                (this.data[0][0] === symbol[i] && this.data[1][1] === symbol[i] && this.data[2][2] === symbol[i]) ||
                (this.data[0][2] === symbol[i] && this.data[1][1] === symbol[i] && this.data[2][0] === symbol[i]))) {
                if(i === 0) {
                    return 'x';
                } else if(i === 1) {
                    return 'o';
                }
            }
        }
        return null;
    }

    noMoreTurns() {
        for(var i = 0; i < this.data.length; i++) {
            for (var j = 0; j < this.data.length; j++) {
                if(this.data[i][j] == '') {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(!this.noMoreTurns()) {
            return false;
        }

        var symbol = ['x', 'o'];
        var e = 0;
        while(e <= symbol.length) {
            if( !(this.data[0][0] === symbol[e] && this.data[0][1] == symbol[e] && this.data[0][2] === symbol[e]) &&
                !(this.data[1][0] === symbol[e] && this.data[1][1] === symbol[e] && this.data[1][2] === symbol[e]) &&
                !(this.data[2][0] === symbol[e] && this.data[2][1] === symbol[e] && this.data[2][2] === symbol[e]) &&
                !(this.data[0][0] === symbol[e] && this.data[1][0] === symbol[e] && this.data[2][0] === symbol[e]) &&
                !(this.data[0][1] === symbol[e] && this.data[1][1] === symbol[e] && this.data[2][1] === symbol[e]) &&
                !(this.data[0][2] === symbol[e] && this.data[1][2] === symbol[e] && this.data[2][2] === symbol[e]) &&
                !(this.data[0][0] === symbol[e] && this.data[1][1] === symbol[e] && this.data[2][2] === symbol[e]) &&
                !(this.data[0][2] === symbol[e] && this.data[1][1] === symbol[e] && this.data[2][0] === symbol[e])) {
                e++;
            } else {
                return false;
            }
        }
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.data[rowIndex][colIndex] != '') {
            return this.data[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
