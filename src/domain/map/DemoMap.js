import { AbstractMap } from 'anahita'

export default class DemoMap extends AbstractMap {
    
    constructor() {
        super({
            lowerLayer: "@/assets/map/demoLower.png",
            upperLayer: "@/assets/map/demoUpper.png",
        });
    }
}