import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBike, editBike } from '../../../actions/bike';
import {
  MainContainer,
  Form,
  ButtonsContainer,
  ErrorMessage
} from '../AddBike/styles';
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

const EditBike = ({
  bikesData: { bike, loading, errors },
  getBike,
  editBike
}) => {
  const [data, setData] = useState(initialState);
  const { state: id } = useLocation();

  useEffect(() => {
    if (!bike) getBike(id);
    if (!loading && bike) {
      const bikeData = { ...initialState };
      for (const key in bike) {
        if (key in bikeData) bikeData[key] = bike[key];
      }
      setData(bikeData);
    }
  }, [loading, bike, getBike, id]);

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

    editBike(id, formData);
  };

  return (
    <MainContainer>
      <TitleH1>Edit bike description</TitleH1>
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
  bikesData: state.bikesData
});

export default connect(mapStateToProps, { getBike, editBike })(EditBike);
