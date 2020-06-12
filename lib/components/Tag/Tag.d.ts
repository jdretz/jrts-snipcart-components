import React from 'react';
import '../../styles.scss';
/**
 * Tag Properties
 */
export interface ITag {
    /** Display name for tag */
    tagName: string;
    /** CSS classnames to be passed to classname */
    className?: string;
    /** React styles object */
    style?: React.CSSProperties;
}
export declare const Tag: React.FC<ITag>;
export default Tag;
//# sourceMappingURL=Tag.d.ts.map