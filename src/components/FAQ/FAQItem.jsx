import PropTypes from 'prop-types';
import s from './FAQ.module.css';
const FAQItem = ({ visible,toggleQuestionOnKey,keys }) => (
  <>
    <div onClick={toggleQuestionOnKey}>
      <p className={s.title}>First Question</p>
      {(visible || keys.includes('First Question')) &&(
        <div className={s.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            interdum diam. Donec interdum porttitor risus non bibendum. Maecenas
            sollicitudin eros in quam imperdiet placerat. Cras justo purus,
            rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec
            elit faucibus condimentum. Donec facilisis consectetur enim sit amet
            varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget
            mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus
            condimentum massa, at elementum libero quam ac ligula. Pellentesque
            at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
            dolor venenatis mauris placerat tristique eget id dolor. Quisque
            blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
            elementum tincidunt.
          </p>
        </div>
      )}
    </div>
    <div onClick={toggleQuestionOnKey}>
      <p className={s.title}>Second Question</p>
      {(visible || keys.includes('Second Question'))&& (
        <div className={s.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            interdum diam. Donec interdum porttitor risus non bibendum. Maecenas
            sollicitudin eros in quam imperdiet placerat. Cras justo purus,
            rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec
            elit faucibus condimentum. Donec facilisis consectetur enim sit amet
            varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget
            mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus
            condimentum massa, at elementum libero quam ac ligula. Pellentesque
            at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
            dolor venenatis mauris placerat tristique eget id dolor. Quisque
            blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
            elementum tincidunt.
          </p>
        </div>
      )}
    </div>
    <div onClick={toggleQuestionOnKey}>
      <p className={s.title}>Third Question</p>
      {(visible || keys.includes('Third Question')) &&(
        <div className={s.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            interdum diam. Donec interdum porttitor risus non bibendum. Maecenas
            sollicitudin eros in quam imperdiet placerat. Cras justo purus,
            rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec
            elit faucibus condimentum. Donec facilisis consectetur enim sit amet
            varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget
            mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus
            condimentum massa, at elementum libero quam ac ligula. Pellentesque
            at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
            dolor venenatis mauris placerat tristique eget id dolor. Quisque
            blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
            elementum tincidunt.
          </p>
        </div>
      )}
    </div>
    <div onClick={toggleQuestionOnKey}>
      <p className={s.title}>Furth Question</p>
      {(visible || keys.includes('Furth Question')) &&(
        <div className={s.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            interdum diam. Donec interdum porttitor risus non bibendum. Maecenas
            sollicitudin eros in quam imperdiet placerat. Cras justo purus,
            rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec
            elit faucibus condimentum. Donec facilisis consectetur enim sit amet
            varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget
            mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus
            condimentum massa, at elementum libero quam ac ligula. Pellentesque
            at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
            dolor venenatis mauris placerat tristique eget id dolor. Quisque
            blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
            elementum tincidunt.
          </p>
        </div>
      )}
    </div>
    <div onClick={toggleQuestionOnKey}>
      <p className={s.title}>Fifth Question</p>
      {(visible || keys.includes('Fifth Question')) &&(
        <div className={s.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            interdum diam. Donec interdum porttitor risus non bibendum. Maecenas
            sollicitudin eros in quam imperdiet placerat. Cras justo purus,
            rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec
            elit faucibus condimentum. Donec facilisis consectetur enim sit amet
            varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget
            mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus
            condimentum massa, at elementum libero quam ac ligula. Pellentesque
            at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
            dolor venenatis mauris placerat tristique eget id dolor. Quisque
            blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
            elementum tincidunt.
          </p>
        </div>
      )}
    </div>
  </>
);

FAQItem.propTypes={
visible: PropTypes.bool.isRequired,
toggleQuestionOnKey: PropTypes.func.isRequired,
keys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default FAQItem;
