import categoryCardName from "../components/categoryCardName";

export default function changeCategoryName(inputElement, categoryClass)
{
  if (!inputElement || !categoryClass) return;

  if (!inputElement.value && categoryClass.getCategoryName() === 'Type Category Name')
  {
    inputElement.classList.add('error');
    inputElement.focus();
    return;
  };

  categoryClass.setCategoryName(inputElement.value);

  if (categoryClass.getCategoryName() === 'Type Category Name')
  {
    inputElement.classList.add('error');
    inputElement.focus();
    return;
  };

  inputElement.replaceWith(categoryCardName(categoryClass));
}