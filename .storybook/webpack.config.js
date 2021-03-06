/*
 * @Author: your name
 * @Date: 2020-08-02 20:49:22
 * @LastEditTime: 2020-09-07 23:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tx-design\.storybook\webpack.config.js
 */
// webpack配置提供给storybook
module.exports = ({ config }) => {
  config.module.rules.push({
    // 匹配哪些文件
    test: /\.tsx?$/,
    // 使用哪些loader进行处理
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      },
      {
        // 通过react代码生成表格
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          // 把那些字面值常量、联合类型等用字符串展开
          shouldExtractLiteralValuesFromEnum: true, 
          // 过滤props
          propFilter(props) {
            // 如果是node_module就就false
            if(props.parent) return !props.parent.fileName.includes('node_modules');
            // 默认true
            return true;
          }
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
