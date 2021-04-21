import { LightningElement } from "lwc";
import { regions } from 'c/regions';

export default class App extends LightningElement {
  
  regions;

  connectedCallback() {
    const tempRegions = regions.slice();

    let map = {}, node, roots = [];
  
    for (let i = 0; i < tempRegions.length; i++) {
      map[tempRegions[i].id] = i; // initialize the map
      tempRegions[i].children = []; // initialize the children
    }

    for (let i = 0; i < tempRegions.length; i++) {
      node = tempRegions[i];
      if (node.parentId) {
        // if you have dangling branches check that map[node.parentId] exists
        tempRegions[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    this.regions = roots;
    
  }

}
