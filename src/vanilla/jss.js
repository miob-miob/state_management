import jssss, { create } from 'jss';
import preset from 'jss-preset-default';
import nested from 'jss-plugin-nested';


jssss.use(nested());
jssss.setup({ insertionPoint: 'cssHere' });

export const jss = create(preset());
