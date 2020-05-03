import slice from './reducer';

const click = () => slice.actions.click()

export const mapDispatchToProps = {
    click
}