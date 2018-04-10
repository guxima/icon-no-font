# icon-no-font

基于HTML实体字符实现的一种网页上展示icon图标的方案。

现有方案的一些弊端：

- 通过字体文件实现的**icon font**，字体文件内的字符映射关系不便于查看，项目迭代过程中修改不方便，可维护性不强。
- 通过纯样式画出来的**CSS icon**，html结构、CSS样式定义都比较复杂，且使用过程中无法通过控制字体大小来控制图标，可用性弱。

基于HTML实体字符实现的icon实现方案有以下特性：

- 可以在不引入字体文件的情况下实现图标展示，通过设置行高、字号来控制样式。
- 标签内容语义化，通过样式控制展示的内容，有利于**SEO**。
- 全部内容基于HTML实体字符，可维护性好，用户可以灵活配置。

## 使用方法

- 方法一：在项目中直接引用**icon-no-font.css**文件。
- 方法二：自定义修改**html-entities.json**中html实体字符配置，运行`npm run build`重新生成**icon-no-font.css**。

## 二次开发

基于**Less**组织的CSS文件结构，源文件位于*less*目录下：

- *base.less* 定义icon样式的全局属性
- *complex.less* 基于html实体字符定义复杂样式属性
- *icon-no-font.less* 自动生成的文件，通过`@import`导入以上两者，并插入根目录下*html-entities.json*转化而来的样式定义

开发步骤：
- *npm i*
- *npm start* 此时会打开调试用的页面，并开启*livereload*
- 修改*less*目录下*base.less*、*complex.less*或*html-entities.json*，保存后自动重新编译生成**icon-no-font.css**

## icon show

本地运行`npm t`打开预览页面查看所有图标及样式名。

##  &olt;  &opar;  &ogt;  &olcir;  &ofcir;  &oplus;  &ominus; ...
