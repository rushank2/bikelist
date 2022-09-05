import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBike } from '../../../actions/bike';
import { MainContainer, Form, ButtonsContainer, ErrorMessage } from './styles';
import { TitleH1 } from '../../common/Title';
import { Link } from '../../common/Link';
import { Button } from '../../common/Button';
import { Field } from '../../common/Field';

const initialState = {
  image: '',
  manufacturer: '',
  model: '',
  year: ''
};

const AddBike = ({ addBike, errors }) => {
  const [data, setData] = useState(initialState);
  const navigate = useNavigate();

  const { manufacturer, model, year } = data;

  const onChange = (e) => {
    const value =
      e.target.name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    addBike(formData, navigate);
  };

  return (
    <MainContainer>
      <TitleH1>Add a stolen bike</TitleH1>
      <Form onSubmit={onSubmit}>
        <Field type="file" accept="image/*" name="image" onChange={onChange} />
        <Field
          type="text"
          placeholder="Manufacturer"
          name="manufacturer"
          value={manufacturer}
          onChange={onChange}
        />
        {errors.manufacturer && (
          <ErrorMessage>{errors.manufacturer}</ErrorMessage>
        )}
        <Field
          type="text"
          placeholder="Model"
          name="model"
          value={model}
          onChange={onChange}
        />
        {errors.model && <ErrorMessage>{errors.model}</ErrorMessage>}
        <Field
          type="text"
          placeholder="Model year"
          name="year"
          value={year}
          onChange={onChange}
        />
        {errors.year && <ErrorMessage>{errors.year}</ErrorMessage>}
        <ButtonsContainer>
          <Button variant="primary">Submit</Button>
          <Link to="/dashboard" type="secondary">
            Go Back
          </Link>
        </ButtonsContainer>
      </Form>
    </MainContainer>
  );
};

const mapStateToProps = (state) => ({
  errors: state.bikesData.errors
});

export default connect(mapStateToProps, { addBike })(AddBike);
