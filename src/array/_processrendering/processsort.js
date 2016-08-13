import getAlreadyRendered from './getalreadyrendered';

// this function gets called when array is sorted
export default function processSort({
    self,
    selfDef,
    eventOptions,
    container
}) {
    // just re-insert rendered nodes in new order
    nofn.forEach(self, item => {
        if (item && typeof item === 'object') {
            const node = getAlreadyRendered({
                item,
                selfDef
            });

            if (node) {
                container.appendChild(node);
            }
        }
    });

}
