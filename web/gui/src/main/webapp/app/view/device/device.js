/*
 * Copyright 2015 Open Networking Laboratory
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 ONOS GUI -- Sample View Module

 @author Simon Hunt
 @author Bri Prebilic Cole
 */

(function () {
    'use strict';

    var urlSuffix = '/onos/v1/devices';

    // TODO : refactor into remote service
    function buildUrl($loc) {
        return $loc.protocol() + '://' + $loc.host() + ':' + $loc.port();
    }

    angular.module('ovDevice', [])
        .controller('OvDeviceCtrl', ['$log', '$http', '$location',
        function ($log, $http, $loc) {
            var self = this;
            self.deviceData = [];
            var url = buildUrl($loc) + urlSuffix;
            $log.log(url);

            $http.get(url).then(
                //success
                function (response) {
                    self.deviceData = response.data.devices;
                },
                //failure
                function (response) {
                    $log.warn('Failed to get device data ', response.status);
                }
            );

            $log.log('OvDeviceCtrl has been created');
        }]);
}());
