var BuilderDP;
(function (BuilderDP) {
    // Builder
    var Builder = /** @class */ (function () {
        function Builder() {
            this._name = "";
            this._state = "";
            this._password = "";
        }
        Builder.prototype.setName = function (value) {
            this._name = value;
            return this;
        };
        Object.defineProperty(Builder.prototype, "Name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Builder.prototype, "State", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        Builder.prototype.setState = function (value) {
            this._state = value;
            return this;
        };
        Object.defineProperty(Builder.prototype, "Password", {
            get: function () {
                return this._password;
            },
            enumerable: true,
            configurable: true
        });
        Builder.prototype.setPassword = function (value) {
            this._password = value;
            return this;
        };
        Builder.prototype.build = function () {
            return new Account(this);
        };
        return Builder;
    }());
    BuilderDP.Builder = Builder;
    // Build
    var Account = /** @class */ (function () {
        function Account(data) {
            this._name = "";
            this._state = "";
            this._password = "";
            this._name = data.Name;
            this._state = data.State;
            this._password = data.Password;
        }
        Object.defineProperty(Account.prototype, "Name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Account.prototype, "State", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Account.prototype, "Password", {
            get: function () {
                return this._password;
            },
            enumerable: true,
            configurable: true
        });
        return Account;
    }());
    BuilderDP.Account = Account;
})(BuilderDP || (BuilderDP = {}));
