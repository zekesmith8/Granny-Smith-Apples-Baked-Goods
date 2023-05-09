import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'products',
    Board: () => (
        <div>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
            <div></div>
            <input type="number" />
        </div>
    ),
});
