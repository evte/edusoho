/**
 * Created by Simon on 03/11/2016.
 */
import Emitter from 'es6-event-emitter';

class Chooser extends Emitter {
    constructor() {
        super();
        this.$parentiframe = $(window.parent.document).find('#task-manage-content-iframe');
    }
    _open() {
        $('.file-chooser-bar').addClass('hidden');
        $('.file-chooser-main').removeClass('hidden');
    }
    _close() {
        $('.file-chooser-main').addClass('hidden');
        $('.file-chooser-bar').removeClass('hidden');
    }

}

export default Chooser;