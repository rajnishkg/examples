/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

// import "./polyfills";
import { InversifyInjector } from "@paperbits/common/injection";
import { CoreDesignModule } from "@paperbits/core/core.design.module";
import { StylesDesignModule } from "@paperbits/styles/styles.design.module";
import { ProseMirrorModule } from "@paperbits/prosemirror/prosemirror.module";
import { OfflineModule } from "@paperbits/common/persistence/offline.module";
import { DemoDesignModule } from "./modules/demo.design.module";

/* Initializing dependency injection  */
const injector = new InversifyInjector();
injector.bindModule(new CoreDesignModule());
injector.bindModule(new StylesDesignModule());
injector.bindModule(new ProseMirrorModule());
injector.bindModule(new DemoDesignModule());
injector.bindModule(new OfflineModule({ autosave: false }));
injector.resolve("autostart");
