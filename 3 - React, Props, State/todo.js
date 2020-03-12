/* jshint esversion: 6 */

class Todo {
    constructor(configuration) {
        this.text  = configuration.text || 'New TODO';
        this.checked = false;
    }

// TODO: madame

    render() {
        return(
            <li>
                <input type="checkbox" checked={this.checked} />
                <span>{this.text}</span>
            </li>
        );
    }
}
