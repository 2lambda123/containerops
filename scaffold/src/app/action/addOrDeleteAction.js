/* Copyright 2014 Huawei Technologies Co., Ltd. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

import * as constant from "../common/constant";
import { pipelineData } from "../pipeline/main";
import * as util from "../common/util";

export function addAction(actions) {
    actions.splice(
        actions.length,
        0, {
            id: constant.PIPELINE_ACTION + "-" + uuid.v1(),
            type: constant.PIPELINE_ACTION,
            // parentIndex: i,
            // index: i,
            setupData: {}
        });

}

export function deleteAction(data, index) {
    // for (var key in pipelineData) {
    //     if (pipelineData[key].type == constant.PIPELINE_STAGE && pipelineData[key].actions.length > 0) {
    //         for (var actionKey in pipelineData[key].actions) {
    //             if (pipelineData[key].actions[actionKey].id == ad.id) {
    //                 pipelineData[key].actions.splice(actionKey, 1);

    //             }

    //         }
    //     }

    // }
    _.each(pipelineData, function(stage){
        if(stage.type == constant.PIPELINE_STAGE && stage.actions && stage.actions.length > 0){
            _.each(stage.actions, function(action){
                if(action.id == data.id){
                    stage.actions = _.without(stage.actions, action);
                }
            })
        }
    })
    util.removeRelatedLines(data.id);
}
