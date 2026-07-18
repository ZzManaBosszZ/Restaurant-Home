import { useState, useEffect } from "react";
function Loading() {
    const [opacity, setOpacity] = useState(1);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let timeoutId;

        if (opacity > 0) {
            timeoutId = setTimeout(() => {
                setOpacity(opacity - 0.05);
            }, 60);
        } else {
            setVisible(false);
        }

        return () => clearTimeout(timeoutId);
    }, [opacity]);
    return (
        visible && (
            <div id="loader" style={{ opacity }}>
            </div>
          )
    );
}
export default Loading;