<div class="panel panel-default">
    <div class="panel-heading"><h3>Search</h3></div>
    <div class="panel-body">
        <div ng-repeat="constrain in constrains" class="row">
            <div class="col-sm-2">
                <select class="form-control" ng-model="constrain.type"
                        ng-options="key for (key, value) in types">
                    <option value="">Type</option>
                </select>
            </div>
            <div class="col-sm-2">
                <select class="form-control" ng-model="constrain.exp"
                        ng-options="expression for expression in expressions">
                    <option value="">Expression</option>
                </select>
            </div>
            <div class="col-sm-2">
                <input class="form-control" disabled ng-show="constrain.type == undefined">
                <input class="form-control" type="text" ng-model="constrain.value['text']"
                       ng-show="constrain.type == 'text'">
                <input class="form-control" type="number" ng-model="constrain.value['number']"
                       ng-show="constrain.type == 'number'">
                <input class="form-control" type="date" ng-model="constrain.value['date']"
                       ng-show="constrain.type == 'date'">
            </div>
            <div class="col-sm-3">
                <span class="form-label" ng-show="constrain.type == 'text'">
                    {{constrain.value['text']}}
                </span>
                <span class="form-label" ng-show="constrain.type == 'number'">
                    {{constrain.value['number'] | currency: "CAD "}}
                </span>
                <span class="form-label" ng-show="constrain.type == 'date'">
                    {{constrain.value['date'] | date: "EEEE',' MMMM d',' yyyy "}}
                </span>
            </div>
            <div class="col-sm-3">
                <button class="btn btn-danger" ng-click="remove($index)" ng-show="constrains.length > 1">Remove
                </button>
                <button class="btn btn-primary" ng-click="add()" ng-show="$last">Add</button>
            </div>
        </div>

    </div>
    <div class="panel-footer">
        <button class="btn btn-success" ng-click="show()">show</button>
    </div>
</div>