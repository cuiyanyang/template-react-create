const indexFile = (fileName) => {
    return `import ${fileName} from './${fileName}';

export default ${fileName};
    `;
}

const CompFile = fileName => {
    return `import React from 'react';
import styles from './${fileName}.less';

const ${fileName} = (props) => {
  return (
    <div className={styles.root}>
      内容
    </div>
  )
}

${fileName}.defaultProps = {

}

export default ${fileName};
    `
}

const CompLessFile = () => {
    return `.root {

}
    `
}

module.exports = {
    indexFile,
    CompFile,
    CompLessFile
}
