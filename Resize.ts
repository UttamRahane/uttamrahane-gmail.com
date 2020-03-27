import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
    inserted(el, binding) {
        const callback = binding.value;
        let timeout = null;
        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                callback();
            }, 500);
        });
        resizeObserver.observe(el);
    },
};

export default directive;
