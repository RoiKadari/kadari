import './nomatch.css'

const NoMatch = () => {
    return (
        <header>
            <div id="clouds">
                <div class="cloud x1" />
                <div class="cloud x1_5" />
                <div class="cloud x2" />
                <div class="cloud x3" />
                <div class="cloud x4" />
                <div class="cloud x5" />
            </div>
            <div class='text'>
                <div class='_404'>404</div>
                <br/><br/><br/>           
                <div class='missing'>הדף שחיפשת לא נמצא</div>
            </div>
        </header>
    );
}
    


export default NoMatch;